// "use client";

// import { useRouter } from "next/navigation";

// export default function LogoutButton() {
//   const router = useRouter();

//   const logout = () => {
//     document.cookie = "auth=; path=/; max-age=0";
//     router.push("/login");
//     router.refresh(); // ✅ refresh navbar server cookie
//   };

//   return (
//     <button
//       onClick={logout}
//       className="px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100"
//     >
//       Logout
//     </button>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { clearAuthCookie } from "@/utils/auth";

export default function LogoutButton({ onLogout }) {
  const router = useRouter();

  const logout = () => {
    // Clear both cookie and localStorage
    clearAuthCookie();
    
    // Immediately update parent component
    if (onLogout) {
      onLogout();
    }
    
    router.push("/login");
  };

  return (
    <button
      onClick={logout}
      className="group inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
    >
      <span className="relative flex items-center space-x-2">
        <span className="text-gray-700 group-hover:text-red-600 transition-colors">
          Logout
        </span>
        <svg
          className="w-4 h-4 text-gray-500 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </span>

      {/* Hover effect background */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-red-100" />

      {/* Static background */}
      <span className="absolute inset-0 rounded-xl bg-gray-50 border border-gray-200 group-hover:border-red-200 transition-colors duration-200" />
    </button>
  );
}
