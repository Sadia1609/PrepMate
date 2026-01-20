export function getBaseUrl() {
  // Client side
  if (typeof window !== "undefined") return "";

  // Server side - Vercel production
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Server side - custom domain or local
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}
