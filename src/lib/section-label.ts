export function sectionShortLabel(sec: string): string {
  if (sec === '3.3i') return '3.3*';
  if (!sec.includes('.')) return `Ch ${sec}`;
  return sec;
}

export function sectionHeading(sec: string, title: string): string {
  const short = sectionShortLabel(sec);
  if (title.startsWith(sec) || title.startsWith(short)) return title;
  return `${short} — ${title}`;
}
