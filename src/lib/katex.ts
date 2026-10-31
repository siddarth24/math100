import katex from 'katex';

/**
 * Renders a string containing LaTeX math delimiters ($...$ and $$...$$)
 * and basic HTML/paragraphs into safe HTML with build-time KaTeX (htmlAndMathml).
 */
export function renderMathText(input: string): string {
  if (!input) return '';

  // 1. Replace display math $$...$$
  let processed = input.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: true,
        output: 'htmlAndMathml',
        throwOnError: false,
        strict: false,
      });
    } catch {
      return `<code>${tex}</code>`;
    }
  });

  // 2. Replace inline math $...$ (avoiding escaped \$)
  processed = processed.replace(/(?<!\\)\$([^\n$]+?)(?<!\\)\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: false,
        output: 'htmlAndMathml',
        throwOnError: false,
        strict: false,
      });
    } catch {
      return `<code>${tex}</code>`;
    }
  });

  // Unescape \$ if any
  processed = processed.replace(/\\\$/g, '$');

  return processed;
}

export function withBase(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!path.startsWith('/')) return path;
  if (path === '/') return base || '/';
  return `${base}${path}`;
}

