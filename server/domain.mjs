import crypto from 'node:crypto';

export const demoUsers = {
  owner: { id: 'usr-owner', organizationId: 'org-example', role: 'client_owner' },
  engineer: { id: 'usr-engineer', organizationId: 'org-example', role: 'client_engineer' },
  viewer: { id: 'usr-viewer', organizationId: 'org-example', role: 'client_viewer' },
  outsider: { id: 'usr-outsider', organizationId: 'org-other', role: 'client_owner' },
  assessor: { id: 'usr-assessor', organizationId: 'staff', role: 'assigned_assessor' },
  reviewer: { id: 'usr-reviewer', organizationId: 'staff', role: 'reviewer' },
};

export const demoEngagement = {
  id: 'eng-demo-001', organizationId: 'org-example', name: 'Example Support App',
  demo: true, signedAuthorization: true, authorizedTargets: ['synthetic://support-agent'],
  window: { startsAt: '2026-11-01T00:00:00.000Z', endsAt: '2027-12-31T23:59:59.000Z' },
};

const clientRoles = new Set(['client_owner', 'client_engineer', 'client_viewer']);

export function canReadEngagement(user, engagement) {
  if (['assigned_assessor', 'reviewer', 'administrator'].includes(user.role)) return true;
  return clientRoles.has(user.role) && user.organizationId === engagement.organizationId;
}

export function canDownloadEvidence(user, evidence) {
  return canReadEngagement(user, { organizationId: evidence.organizationId });
}

export function canChangeFinding(user) {
  return ['client_owner', 'client_engineer', 'assigned_assessor', 'reviewer', 'administrator'].includes(user.role);
}

export function validateRun({ engagement, target, now = new Date(), cancelled = false }) {
  if (engagement.demo !== true) throw new Error('Demo runner accepts demo engagements only');
  if (!engagement.signedAuthorization) throw new Error('Signed authorization is required before testing');
  if (!engagement.authorizedTargets.includes(target)) throw new Error('Target is outside the signed scope');
  if (now < new Date(engagement.window.startsAt) || now > new Date(engagement.window.endsAt)) throw new Error('Run is outside the authorized test window');
  if (cancelled) return { status: 'canceled', completedChecks: 0, remainingChecks: 1 };
  return { status: 'allowed' };
}

export function runSyntheticAssessment({ engagement = demoEngagement, fixed = false, cancelled = false, now = new Date('2026-11-04T10:00:00.000Z') } = {}) {
  const gate = validateRun({ engagement, target: 'synthetic://support-agent', now, cancelled });
  if (gate.status === 'canceled') return { run: gate, evidence: [], finding: null };

  const testId = 'tenant-order-ownership';
  const observed = fixed
    ? { httpStatus: 403, orderReturned: false, unauthorizedActionPerformed: false }
    : { httpStatus: 200, orderReturned: true, unauthorizedActionPerformed: true, exposedOrder: 'ORDER-B-204' };
  const trace = `customer=customer-a; requested_order=ORDER-B-204; status=${observed.httpStatus}`;
  const evidence = {
    id: `ev-${fixed ? 'fixed' : 'vulnerable'}-001`, organizationId: engagement.organizationId,
    engagementId: engagement.id, runId: `run-${fixed ? 'retest' : 'initial'}-001`, testId, testVersion: '1.0.0',
    timestamp: now.toISOString(), targetConfiguration: 'synthetic://support-agent', sanitizedTrace: trace,
    observedOutcome: observed, expectedRule: 'A customer may read only orders owned by that customer.',
    sourceTool: 'sthuthi-synthetic-adapter', sourceVersion: '1.0.0',
    artifactDigest: crypto.createHash('sha256').update(trace).digest('hex'),
    limits: 'Synthetic fixture with two fake customers and one refund workflow.', reviewer: fixed ? 'usr-reviewer' : null,
  };
  const finding = fixed ? null : {
    id: 'finding-demo-001', title: "The support agent could access another customer's order.", severity: 'High',
    reviewState: 'Needs review', remediationState: 'Open', affectedWorkflow: 'Order lookup',
    impact: 'A signed-in customer could receive order details belonging to someone else.',
    observation: "In the demo test, the agent returned Customer B's order details during Customer A's session.",
    fix: 'Check order ownership in the orders API before returning details.', evidenceId: evidence.id,
  };
  return { run: { status: 'completed', completedChecks: 1, remainingChecks: 0 }, evidence: [evidence], finding };
}

export function transitionReview(finding, next, user) {
  const allowed = { Draft: ['Needs review'], 'Needs review': ['Confirmed', 'Rejected'], Confirmed: [], Rejected: [] };
  if (!['reviewer', 'administrator'].includes(user.role)) throw new Error('Reviewer role required');
  if (!allowed[finding.reviewState]?.includes(next)) throw new Error('Invalid review transition');
  return { ...finding, reviewState: next, reviewHistory: [...(finding.reviewHistory || []), { by: user.id, to: next }] };
}

export function transitionRemediation(finding, next, user, evidence) {
  if (!canChangeFinding(user)) throw new Error('Role may not change remediation state');
  if (next === 'Fixed and verified' && (!['reviewer', 'administrator'].includes(user.role) || !evidence)) throw new Error('Verification evidence and reviewer role required');
  if (next === 'Risk accepted' && !['client_owner', 'administrator'].includes(user.role)) throw new Error('Only an owner may accept risk');
  return { ...finding, remediationState: next, remediationHistory: [...(finding.remediationHistory || []), { by: user.id, to: next }] };
}

export function validateAssessmentRequest(input) {
  const required = ['name', 'email', 'company', 'service', 'systemType', 'description', 'timeline'];
  for (const field of required) if (!String(input[field] || '').trim()) throw new Error(`${field} is required`);
  if (!/^\S+@\S+\.\S+$/.test(input.email)) throw new Error('Enter a valid email address');
  if (input.description.length > 4000) throw new Error('Description is too long');
  return { ...input, id: crypto.randomUUID(), receivedAt: new Date().toISOString(), notificationStatus: 'unconnected' };
}
