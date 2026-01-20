export function getBaseUrl() {
  // Client side
  if (typeof window !== "undefined") return "";

  // Server side (local + vercel)
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}
