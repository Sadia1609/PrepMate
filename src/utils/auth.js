export const AUTH_EMAIL = "sadia@gmail.com";
export const AUTH_PASS = "123456";

export function setAuthCookie() {
  // Set cookie with proper domain and security settings
  document.cookie = "auth=true; path=/; max-age=86400; SameSite=Lax";
  
  // Also store in localStorage for immediate access
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth', 'true');
    
    // Dispatch multiple events to ensure navbar updates
    window.dispatchEvent(new Event('authchange'));
    window.dispatchEvent(new Event('storage'));
    
    // Force a small delay to ensure all components can react
    setTimeout(() => {
      window.dispatchEvent(new Event('authchange'));
    }, 50);
  }
}

export function clearAuthCookie() {
  // Clear cookie
  document.cookie = "auth=; path=/; max-age=0; SameSite=Lax";
  
  // Also clear from localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth');
    
    // Dispatch multiple events to ensure navbar updates
    window.dispatchEvent(new Event('authchange'));
    window.dispatchEvent(new Event('storage'));
    
    // Force a small delay to ensure all components can react
    setTimeout(() => {
      window.dispatchEvent(new Event('authchange'));
    }, 50);
  }
}
