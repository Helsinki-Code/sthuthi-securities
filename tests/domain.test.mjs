import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { services } from '../src/catalog.mjs';
import {
  canDownloadEvidence, canReadEngagement, demoEngagement, demoUsers, runSyntheticAssessment,
  transitionRemediation, transitionReview, validateAssessmentRequest, validateRun,
} from '../server/domain.mjs';
import { resourceDownloads, resolveResourceDownload } from '../server/resources.mjs';

test('service catalog keeps all approved offers and visible recurring terms', () => {
  assert.equal(services.length, 10);
  assert.equal(services.find(s => s.slug === 'penetration-testing').price, 'From $12,000');
  const ongoing = services.find(s => s.slug === 'ongoing-security-testing');
  assert.match(ongoing.price, /\$5,000 setup/);
  assert.match(ongoing.timing, /3-month/);
});

test('cross-organization users cannot read engagements or evidence', () => {
  assert.equal(canReadEngagement(demoUsers.owner, demoEngagement), true);
  assert.equal(canReadEngagement(demoUsers.outsider, demoEngagement), false);
  assert.equal(canDownloadEvidence(demoUsers.outsider, { organizationId: demoEngagement.organizationId }), false);
});

test('runner requires signed scope and blocks targets outside the allowlist', () => {
  assert.throws(() => validateRun({ engagement: { ...demoEngagement, signedAuthorization: false }, target: 'synthetic://support-agent', now: new Date('2026-11-04') }), /Signed authorization/);
  assert.throws(() => validateRun({ engagement: demoEngagement, target: 'https://example.com', now: new Date('2026-11-04') }), /outside the signed scope/);
});

test('runner cancellation records partial execution honestly', () => {
  const result = runSyntheticAssessment({ cancelled: true });
  assert.equal(result.run.status, 'canceled');
  assert.equal(result.run.remainingChecks, 1);
  assert.equal(result.finding, null);
});

test('synthetic test proves the server action and the corrected path', () => {
  const vulnerable = runSyntheticAssessment();
  assert.equal(vulnerable.evidence[0].observedOutcome.unauthorizedActionPerformed, true);
  assert.equal(vulnerable.finding.reviewState, 'Needs review');
  const fixed = runSyntheticAssessment({ fixed: true });
  assert.equal(fixed.evidence[0].observedOutcome.httpStatus, 403);
  assert.equal(fixed.evidence[0].observedOutcome.unauthorizedActionPerformed, false);
});

test('finding review and remediation transitions enforce role and evidence', () => {
  const base = runSyntheticAssessment().finding;
  assert.throws(() => transitionReview(base, 'Confirmed', demoUsers.engineer), /Reviewer role/);
  const confirmed = transitionReview(base, 'Confirmed', demoUsers.reviewer);
  assert.equal(confirmed.reviewState, 'Confirmed');
  const ready = transitionRemediation(confirmed, 'Ready for retest', demoUsers.engineer);
  assert.equal(ready.remediationState, 'Ready for retest');
  assert.throws(() => transitionRemediation(ready, 'Fixed and verified', demoUsers.reviewer, null), /evidence/);
  const verified = transitionRemediation(ready, 'Fixed and verified', demoUsers.reviewer, { id: 'ev-retest' });
  assert.equal(verified.remediationState, 'Fixed and verified');
});

test('intake validates and records notification separately from storage', () => {
  const record = validateAssessmentRequest({ name: 'Alex', email: 'alex@example.com', company: 'Example Co', service: 'penetration-testing', systemType: 'Web app', description: 'Customer requested a pen test.', timeline: '1–3 months' });
  assert.ok(record.id);
  assert.equal(record.notificationStatus, 'unconnected');
  assert.throws(() => validateAssessmentRequest({}), /name is required/);
});

test('resource downloads use an allowlist and fixed filenames', () => {
  assert.equal(Object.keys(resourceDownloads).length, 8);
  const pdf = resolveResourceDownload('/srv/site/dist', 'penetration-test-scoping-workbook', 'pdf');
  assert.equal(pdf.type, 'application/pdf');
  assert.equal(pdf.file, 'Penetration-Test-Scoping-Workbook.pdf');
  assert.equal(pdf.filePath, '/srv/site/dist/resources/penetration-test-scoping-workbook/Penetration-Test-Scoping-Workbook.pdf');
  const aiGuide = resolveResourceDownload('/srv/site/dist', 'ai-security-customer-support-agents', 'epub');
  assert.equal(aiGuide.type, 'application/epub+zip');
  assert.equal(aiGuide.file, 'AI-Security-for-Customer-Support-Agents.epub');
  assert.equal(aiGuide.filePath, '/srv/site/dist/resources/ai-security-customer-support-agents/AI-Security-for-Customer-Support-Agents.epub');
  assert.equal(resolveResourceDownload('/srv/site/dist', 'penetration-test-scoping-workbook', '../../secret'), null);
  assert.equal(resolveResourceDownload('/srv/site/dist', 'unknown-resource', 'pdf'), null);
});

test('every resource edition is present at its static download path', () => {
  for (const [slug, formats] of Object.entries(resourceDownloads)) {
    for (const record of Object.values(formats)) {
      assert.equal(existsSync(new URL(`../public/resources/${slug}/${record.file}`, import.meta.url)), true, `${slug}/${record.file}`);
    }
  }
});
