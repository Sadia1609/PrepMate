
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { AUTH_EMAIL, AUTH_PASS, setAuthCookie } from "@/utils/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Check if already logged in (disabled to prevent redirect loop)
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     router.replace("/questions");
  //   }
  // }, [isLoggedIn, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email === AUTH_EMAIL && pass === AUTH_PASS) {
      // ✅ set cookie and localStorage
      setAuthCookie();
      
      // ✅ Show success message immediately
      setLoginSuccess(true);
      setError("");
      
      // ✅ Manually trigger navbar update immediately
      window.dispatchEvent(new Event('authchange'));
      
      // Also update localStorage to ensure immediate effect
      localStorage.setItem('auth', 'true');
      
      // ✅ Redirect after ensuring everything is set
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      setError("Invalid email or password. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Brand/Info */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-[#301CA0] via-[#7132CA] to-[#C47BE4] rounded-3xl p-8 lg:p-10 h-full text-white">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold">PrepMate</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Welcome Back to Your Interview Prep Journey
              </h1>
              <p className="text-white/90">
                Access your personalized dashboard, track progress, and continue
                practicing.
              </p>
            </div>

            <div className="space-y-4 mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Track your learning progress</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <span>Save your marked questions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <span>Personalized recommendations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="lg:hidden mb-8">
            <SectionTitle
              title="Login to PrepMate"
              subtitle="Access your dashboard and continue your interview preparation"
            />
          </div>

          <div className="hidden lg:block mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7132CA] to-[#301CA0] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#7132CA] to-[#301CA0] bg-clip-text text-transparent">
                PrepMate
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to access your personalized dashboard
            </p>
          </div>

          {/* Demo Credentials Card */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-5 mb-6">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-[#F29AAE] flex items-center justify-center mr-3">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">Demo Credentials</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-gray-500 w-20">Email:</span>
                <span className="font-mono font-medium text-gray-900 bg-gray-200 px-2 py-1 rounded">
                  {AUTH_EMAIL}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 w-20">Password:</span>
                <span className="font-mono font-medium text-gray-900 bg-gray-200 px-2 py-1 rounded">
                  {AUTH_PASS}
                </span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-12 outline-none focus:ring-2 focus:ring-[#7132CA] focus:border-[#7132CA] transition-all"
                  placeholder="Enter your email"
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-12 outline-none focus:ring-2 focus:ring-[#7132CA] focus:border-[#7132CA] transition-all"
                  placeholder="Enter your password"
                  required
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {loginSuccess && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-sm text-green-700 font-medium">
                    Login successful! Redirecting to dashboard...
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full py-3.5" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Sign In
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
              )}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Demo Login Only
                </span>
              </div>
            </div>

            {/* Help Text */}
            <p className="text-center text-sm text-gray-500">
              This is a demo application. Use the credentials above to login.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
