import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & { weight?: string };
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

export function ArrowRight(props: Props) { return <svg {...base} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }
export function Check(props: Props) { return <svg {...base} {...props}><path d="m5 12 4 4L19 6" /></svg>; }
export function X(props: Props) { return <svg {...base} {...props}><path d="M6 6l12 12M18 6 6 18" /></svg>; }
export function List(props: Props) { return <svg {...base} {...props}><path d="M5 7h14M5 12h14M5 17h14" /></svg>; }
export function Sun(props: Props) { return <svg {...base} {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>; }
export function Moon(props: Props) { return <svg {...base} {...props}><path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z" /></svg>; }
export function ShieldCheck(props: Props) { return <svg {...base} {...props}><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>; }
export function Warning(props: Props) { return <svg {...base} {...props}><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17.5h.01" /></svg>; }
export function Flask(props: Props) { return <svg {...base} {...props}><path d="M9 3h6M10 3v6l-5 9c-.6 1 .1 3 2 3h10c1.9 0 2.6-2 2-3l-5-9V3"/><path d="M7.5 15h9" /></svg>; }
export function FileLock(props: Props) { return <svg {...base} {...props}><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h4M9 15h6v4H9zM10.5 15v-1.5a1.5 1.5 0 0 1 3 0V15" /></svg>; }
export function CloudCheck(props: Props) { return <svg {...base} {...props}><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18Z"/><path d="m9 13 2 2 4-4" /></svg>; }
export function ClipboardText(props: Props) { return <svg {...base} {...props}><rect x="5" y="4" width="14" height="17" rx="1"/><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5" /></svg>; }
