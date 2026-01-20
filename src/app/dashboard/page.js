// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import SectionTitle from "@/components/SectionTitle";
// import ProgressBar from "@/components/ProgressBar";
// import StatCard from "@/components/StatCard";
// import { getProgress } from "@/utils/progress";
// import Link from "next/link";
// import Button from "@/components/Button";

// export default function DashboardPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [questions, setQuestions] = useState([]);
//   const [progress, setProgress] = useState({ strong: {}, weak: {} });

//   useEffect(() => {
//     let alive = true;

//     async function init() {
//       // ✅ auth check
//       const isLoggedIn = document.cookie.includes("auth=true");

//       if (!isLoggedIn) {
//         router.replace("/login");
//         return;
//       }

//       // ✅ fetch questions + progress
//       const res = await fetch("/api/questions");
//       const data = await res.json();
//       const saved = getProgress();

//       if (!alive) return;

//       // ✅ setState once per state (safe)
//       setQuestions(data);
//       setProgress(saved);
//       setLoading(false);
//     }

//     init();

//     return () => {
//       alive = false;
//     };
//   }, [router]);

//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-6">
//         <div className="bg-white border rounded-2xl p-6">
//           <p className="font-semibold">Checking authentication...</p>
//           <p className="text-sm text-slate-600 mt-1">
//             Loading your dashboard...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const total = questions.length;
//   const strongCount = Object.keys(progress.strong || {}).length;
//   const weakCount = Object.keys(progress.weak || {}).length;
//   const completed = strongCount + weakCount;
//   const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

//   // ✅ get weak questions (no useMemo)
//   const weakIds = Object.keys(progress.weak || {});
//   const weakQuestions = questions.filter((q) => weakIds.includes(q.id));

//   return (
//     <div className="space-y-6">
//       <section className="bg-white border rounded-2xl p-6">
//         <SectionTitle
//           title="Dashboard (Protected)"
//           subtitle="Only accessible after login. Track your progress here."
//         />

//         <div className="mt-4 flex flex-wrap gap-2">
//           <Link href="/questions">
//             <Button>Practice Questions</Button>
//           </Link>
//           <Link href="/questions">
//             <Button variant="secondary">Mark Strong/Weak</Button>
//           </Link>
//         </div>
//       </section>

//       <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <StatCard title="Total Questions" value={total} />
//         <StatCard
//           title="Completed"
//           value={completed}
//           subtitle="Strong + Weak"
//         />
//         <StatCard title="Strong ✅" value={strongCount} />
//         <StatCard title="Weak ⚠️" value={weakCount} />
//       </section>

//       <section className="bg-white border rounded-2xl p-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-bold">Overall Progress</h2>
//           <span className="text-sm text-slate-500">{percent}%</span>
//         </div>

//         <div className="mt-3">
//           <ProgressBar percent={percent} />
//         </div>

//         <p className="mt-3 text-sm text-slate-600">
//           Mark questions Strong/Weak to improve your score.
//         </p>
//       </section>

//       <section className="bg-white border rounded-2xl p-6">
//         <h2 className="text-lg font-bold">Weak Questions ⚠️</h2>
//         <p className="text-sm text-slate-600 mt-1">
//           Practice these first for faster improvement.
//         </p>

//         <div className="mt-4 space-y-2">
//           {weakQuestions.length === 0 ? (
//             <div className="bg-slate-50 border rounded-2xl p-4">
//               <p className="font-semibold">No weak questions yet ✅</p>
//               <p className="text-sm text-slate-600 mt-1">
//                 Open a question and mark it as Weak.
//               </p>
//             </div>
//           ) : (
//             weakQuestions.slice(0, 8).map((q) => (
//               <Link
//                 key={q.id}
//                 href={`/questions/${q.id}`}
//                 className="block bg-slate-50 border rounded-2xl p-4 hover:bg-slate-100 transition"
//               >
//                 <p className="font-semibold">{q.title}</p>
//                 <p className="text-sm text-slate-600 mt-1">
//                   {q.category} • {q.difficulty}
//                 </p>
//               </Link>
//             ))
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import ProgressBar from "@/components/ProgressBar";
import StatCard from "@/components/StatCard";
import { getProgress } from "@/utils/progress";
import Link from "next/link";
import Button from "@/components/Button";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState({ strong: {}, weak: {} });
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    let alive = true;

    async function init() {
      // ✅ auth check
      const isLoggedIn = document.cookie.includes("auth=true");

      if (!isLoggedIn) {
        router.replace("/login");
        return;
      }

      setAuthChecked(true);

      // ✅ fetch questions + progress
      try {
        const res = await fetch("/api/questions");
        const data = await res.json();
        const saved = getProgress();

        if (!alive) return;

        // ✅ setState once per state (safe)
        setQuestions(data);
        setProgress(saved);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    }

    init();

    return () => {
      alive = false;
    };
  }, [router]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#7132CA] animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-[#C47BE4] animate-pulse delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-[#F29AAE] animate-pulse delay-300"></div>
          </div>
          <h3 className="font-semibold text-gray-900">
            Loading your dashboard...
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Preparing your personalized interview preparation insights
          </p>
        </div>
      </div>
    );
  }

  const total = questions.length;
  const strongCount = Object.keys(progress.strong || {}).length;
  const weakCount = Object.keys(progress.weak || {}).length;
  const completed = strongCount + weakCount;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const remaining = total - completed;

  // ✅ get weak questions
  const weakIds = Object.keys(progress.weak || {});
  const weakQuestions = questions.filter((q) => weakIds.includes(q.id));

  // ✅ get strong questions for completeness
  const strongIds = Object.keys(progress.strong || {});
  const strongQuestions = questions.filter((q) => strongIds.includes(q.id));

  return (
    <div className="space-y-8 lg:space-y-10">
      {/* Header */}
      <section className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <SectionTitle
              title="Your Learning Dashboard"
              subtitle="Track your progress, identify weak areas, and improve systematically"
            />

            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#7132CA]"></div>
                <span className="text-sm text-gray-600">Protected Route</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#C47BE4]"></div>
                <span className="text-sm text-gray-600">Progress Synced</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/questions">
              <Button>
                <span className="flex items-center">
                  Practice Questions
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
            <Link href="/questions">
              <Button variant="secondary">
                <span className="flex items-center">
                  Mark Progress
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          <StatCard
            title="Total Questions"
            value={total}
            subtitle="Available for practice"
          />
          <StatCard
            title="Completed"
            value={completed}
            subtitle={`${strongCount} strong + ${weakCount} weak`}
          />
          <StatCard
            title="Strong Topics ✅"
            value={strongCount}
            subtitle="You're confident in these"
          />
          <StatCard
            title="Needs Practice ⚠️"
            value={weakCount}
            subtitle="Focus on these areas"
          />
        </div>
      </section>

      {/* Progress Section */}
      <section className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Overall Learning Progress
            </h2>
            <p className="text-gray-600 mt-1">
              Track how much you&apos;ve covered
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#301CA0] to-[#7132CA] bg-clip-text text-transparent">
                {percent}%
              </div>
              <div className="text-xs text-gray-500">Completion</div>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                {remaining}
              </div>
              <div className="text-xs text-gray-500">Remaining</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <ProgressBar percent={percent} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
          <div className="text-center p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100">
            <div className="text-emerald-700 font-bold text-lg">
              {strongCount}
            </div>
            <div className="text-emerald-600 text-sm">Strong Topics</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
            <div className="text-amber-700 font-bold text-lg">{weakCount}</div>
            <div className="text-amber-600 text-sm">Needs Practice</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200">
            <div className="text-gray-700 font-bold text-lg">{remaining}</div>
            <div className="text-gray-600 text-sm">Not Started</div>
          </div>
        </div>
      </section>

      {/* Weak Questions Section */}
      <section className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
        <div className="px-6 sm:px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Areas Needing Practice ⚠️
              </h2>
              <p className="text-gray-600 mt-1">
                Focus on these questions to maximize improvement
              </p>
            </div>
            {weakQuestions.length > 0 && (
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                <span className="text-amber-700 font-medium text-sm">
                  {weakQuestions.length} questions to review
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {weakQuestions.length === 0 ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                No weak questions yet!
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                You&apos;re doing great! Mark questions as &quot;Weak&quot;
                while practicing to track areas that need improvement.
              </p>
              <Link href="/questions" className="inline-block mt-6">
                <Button>Start Practicing</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {weakQuestions.slice(0, 6).map((q) => (
                <Link
                  key={q.id}
                  href={`/questions/${q.id}`}
                  className="group block bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                      Priority
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-800 transition-colors">
                    {q.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-amber-200/50 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="text-gray-600">{q.category}</span>
                      <span className="mx-2">•</span>
                      <span
                        className={`font-medium ${
                          q.difficulty === "Easy"
                            ? "text-emerald-600"
                            : q.difficulty === "Medium"
                              ? "text-amber-600"
                              : "text-red-600"
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {weakQuestions.length > 6 && (
            <div className="mt-8 text-center">
              <Link href="/questions">
                <Button variant="secondary">
                  View All {weakQuestions.length} Weak Questions
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
