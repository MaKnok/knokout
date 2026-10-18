// Prefixes a file from /public with the site's base path,
// so images load both locally and on GitHub Pages (/knokout/...).
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (/^(https?:|data:|\/\/)/.test(path)) return path;
  return `${base}/${path.replace(/^\//, "")}`;
}
