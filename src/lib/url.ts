// Prefixes a site path with the configured base, so links work both at the
// domain root and under the GitHub Pages preview path.
export function url(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

// Splits a multi-line text field into paragraphs at blank lines.
export function paragraphs(text = ""): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}
