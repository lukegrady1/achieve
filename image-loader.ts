// Custom next/image loader for static export on GitHub Pages.
// The default unoptimized loader does NOT apply basePath to image src, so local
// /public assets would 404 under the /achieve subpath. This prepends the base
// path (and leaves absolute/remote URLs untouched).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface LoaderArgs {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src }: LoaderArgs): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${basePath}${src}`;
}
