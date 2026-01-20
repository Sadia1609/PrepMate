// import Link from "next/link";
// import { cookies } from "next/headers";
// import LogoutButton from "@/components/LogoutButton";

// export default async function Navbar() {
//   // ✅ Next.js 15/16: cookies() is async
//   const cookieStore = await cookies();
//   const auth = cookieStore.get("auth");
//   const isLoggedIn = auth?.value === "true";

//   return (
//     <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
//       <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="font-bold text-indigo-600 text-lg">
//           PrepMate
//         </Link>

//         {/* Desktop */}
//         <div className="hidden md:flex gap-2 items-center">
//           <Link
//             href="/"
//             className="px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100"
//           >
//             Home
//           </Link>

//           <Link
//             href="/questions"
//             className="px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100"
//           >
//             Questions
//           </Link>

//           <Link
//             href="/login"
//             className="px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100"
//           >
//             Login
//           </Link>

//           <Link
//             href="/dashboard"
//             className="px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100"
//           >
//             Dashboard
//           </Link>

//           {/* ✅ server reads cookie correctly */}
//           {isLoggedIn ? <LogoutButton /> : null}
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden flex gap-2 items-center">
//           <Link
//             href="/login"
//             className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100"
//           >
//             Login
//           </Link>

//           <Link
//             href="/questions"
//             className="px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white"
//           >
//             Questions
//           </Link>

//           {isLoggedIn ? (
//             <div className="bg-slate-100 rounded-xl">
//               <LogoutButton />
//             </div>
//           ) : null}
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function Navbar() {
  // Initialize with false to match server-side rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  // Memoized auth check function
  const checkAuth = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const localAuth = localStorage.getItem('auth') === 'true';
      
      // Check cookie as backup
      const authCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth='));
      const cookieAuth = authCookie?.split('=')[1] === 'true';
      
      const loggedIn = localAuth || cookieAuth;
      
      // Update auth state
      setIsLoggedIn(loggedIn);
      
      // Mark that we've checked auth at least once
      if (!hasCheckedAuth) {
        setHasCheckedAuth(true);
      }
    }
  }, [hasCheckedAuth]);

  useEffect(() => {
    // Initial auth check with timeout to avoid React warning
    const timer = setTimeout(() => {
      checkAuth();
    }, 0);

    // Listen for auth changes
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('authchange', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('focus', handleAuthChange);

    // Periodic check as fallback
    const interval = setInterval(checkAuth, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('authchange', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('focus', handleAuthChange);
      clearInterval(interval);
    };
  }, [checkAuth]);

  const handleLogout = useCallback(() => {
    // Clear auth state immediately
    setIsLoggedIn(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7132CA] to-[#301CA0] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F29AAE]"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#7132CA] to-[#301CA0] bg-clip-text text-transparent">
              PrepMate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#7132CA] transition-colors duration-200 hover:bg-gray-50"
            >
              Home
            </Link>

            <Link
              href="/questions"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#7132CA] transition-colors duration-200 hover:bg-gray-50"
            >
              Questions
            </Link>

            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#7132CA] transition-colors duration-200 hover:bg-gray-50"
            >
              Dashboard
            </Link>

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {/* Auth section - show login by default, update after auth check */}
            {isLoggedIn ? (
              <div className="ml-2">
                <LogoutButton onLogout={handleLogout} />
              </div>
            ) : (
              <Link
                href="/login"
                className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#7132CA] to-[#C47BE4] hover:from-[#5A27A6] hover:to-[#B369D0] transition-all duration-200 shadow-sm hover:shadow"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Auth section - show login by default, update after auth check */}
            {isLoggedIn ? (
              <div className="px-3 py-1.5 bg-gray-50 rounded-lg">
                <LogoutButton onLogout={handleLogout} />
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#7132CA] to-[#C47BE4]"
              >
                Login
              </Link>
            )}

            <Link
              href="/questions"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#301CA0] to-[#7132CA] shadow-sm"
            >
              Questions
            </Link>
          </div>
        </div>

        {/* Mobile Bottom Bar */}
        <div className="md:hidden flex items-center justify-around mt-3 pt-3 border-t border-gray-100">
          <Link
            href="/"
            className="flex flex-col items-center px-2 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-[#7132CA]"
          >
            <div className="w-6 h-6 flex items-center justify-center mb-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            Home
          </Link>

          <Link
            href="/dashboard"
            className="flex flex-col items-center px-2 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-[#7132CA]"
          >
            <div className="w-6 h-6 flex items-center justify-center mb-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            Dashboard
          </Link>

          <Link
            href="/questions"
            className="flex flex-col items-center px-2 py-1.5 rounded-lg text-xs font-medium text-[#7132CA]"
          >
            <div className="w-6 h-6 flex items-center justify-center mb-1 bg-gradient-to-br from-[#7132CA] to-[#C47BE4] rounded-full">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            Questions
          </Link>
        </div>
      </nav>
    </header>
  );
}
