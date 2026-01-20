export const AUTH_EMAIL = "sadia@gmail.com";
export const AUTH_PASS = "123456";

export function setAuthCookie() {
  document.cookie = "auth=true; path=/; max-age=86400";
  
  // Also store in localStorage for immediate access
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth', 'true');
    window.dispatchEvent(new Event('authchange'));
  }
}

export function clearAuthCookie() {
  document.cookie = "auth=; path=/; max-age=0";
  
  // Also clear from localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth');
    window.dispatchEvent(new Event('authchange'));
  }
}
