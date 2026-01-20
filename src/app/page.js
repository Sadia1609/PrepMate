// import Link from "next/link";
// import Button from "@/components/Button";
// import SectionTitle from "@/components/SectionTitle";

// export default function LandingPage() {
//   return (
//     <div className="space-y-10">
//       {/* 1 HERO */}
//       <section className="bg-white border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6">
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold">
//             PrepMate — Frontend Interview Prep App
//           </h1>
//           <p className="text-slate-600 mt-2 max-w-xl">
//             Practice React / JavaScript / CSS questions, track weak topics and
//             prepare smarter.
//           </p>
//           <div className="mt-5 flex flex-wrap gap-2">
//             <Link href="/questions">
//               <Button>Explore Questions</Button>
//             </Link>
//             <Link href="/login">
//               <Button variant="secondary">Login</Button>
//             </Link>
//           </div>
//         </div>

//         <div className="flex-1 bg-slate-50 border rounded-2xl p-5">
//           <p className="font-bold">What you can do</p>
//           <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc pl-5">
//             <li>Browse interview questions</li>
//             <li>Open details with explanation & example</li>
//             <li>Login to see your dashboard</li>
//           </ul>
//         </div>
//       </section>

//       {/* 2 FEATURES */}
//       <section>
//         <SectionTitle
//           title="Core Features"
//           subtitle="Simple but functional — perfect for assignment submission."
//         />
//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             ["Question List", "Public questions list fetched from JSON API"],
//             ["Question Details", "Full details page with examples"],
//             ["Mock Login", "Cookie login + protected dashboard route"],
//           ].map(([t, d]) => (
//             <div key={t} className="bg-white border rounded-2xl p-5">
//               <p className="font-bold">{t}</p>
//               <p className="text-slate-600 text-sm mt-1">{d}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3 CATEGORIES */}
//       <section className="bg-white border rounded-2xl p-6">
//         <SectionTitle
//           title="Categories"
//           subtitle="Focus on key frontend topics."
//         />
//         <div className="flex flex-wrap gap-2">
//           {["React", "JavaScript", "CSS", "Interview Tips"].map((c) => (
//             <span
//               key={c}
//               className="px-3 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-sm font-semibold"
//             >
//               {c}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* 4 HOW IT WORKS */}
//       <section>
//         <SectionTitle title="How it Works" subtitle="3 simple steps." />
//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             ["01", "Browse Questions", "Open any question and learn quickly"],
//             ["02", "Understand Deeply", "Read explanation and code example"],
//             ["03", "Login & Track", "Access dashboard and track progress"],
//           ].map(([s, t, d]) => (
//             <div key={s} className="bg-white border rounded-2xl p-5">
//               <p className="text-xs font-bold text-slate-500">STEP {s}</p>
//               <p className="font-bold mt-2">{t}</p>
//               <p className="text-slate-600 text-sm mt-1">{d}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5 WHY PREPMATE */}
//       <section className="bg-white border rounded-2xl p-6">
//         <SectionTitle
//           title="Why PrepMate?"
//           subtitle="Why this is meaningful."
//         />
//         <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
//           <li>Directly helps interview preparation</li>
//           <li>Clean UI + real routing structure</li>
//           <li>Shows your Next.js App Router skill</li>
//         </ul>
//       </section>

//       {/* 6 TESTIMONIALS */}
//       <section>
//         <SectionTitle title="Student Feedback" subtitle="Demo section." />
//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             ["Sadia", "Finally a project that actually helps my learning!"],
//             ["Rafi", "Simple design but really useful and clean."],
//             ["Nila", "Great for tracking interview practice."],
//           ].map(([n, text]) => (
//             <div key={n} className="bg-white border rounded-2xl p-5">
//               <p className="text-sm text-slate-700">“{text}”</p>
//               <p className="mt-3 text-xs font-bold text-slate-500">— {n}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 7 CTA */}
//       <section className="bg-indigo-600 text-white rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//         <div>
//           <h2 className="text-2xl font-bold">Start practicing today</h2>
//           <p className="text-white/90 mt-1">
//             Open question list or login to unlock dashboard.
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <Link href="/questions">
//             <Button className="bg-white text-indigo-700 hover:bg-slate-100">
//               View Questions
//             </Button>
//           </Link>
//           <Link href="/login">
//             <Button variant="ghost" className="text-white hover:bg-white/10">
//               Login
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import Link from "next/link";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function LandingPage() {
  return (
    <div className="space-y-14 sm:space-y-16 lg:space-y-20">
      {/* 1 HERO */}
      <section className="relative bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7132CA]/5 to-[#C47BE4]/5 rounded-full -translate-y-32 translate-x-32"></div>

        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#7132CA]/10 to-[#C47BE4]/10 text-[#7132CA] text-sm font-semibold mb-4">
            🚀 Interview Preparation Platform
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Ace Your Frontend Interviews with{" "}
            <span className="bg-gradient-to-r from-[#7132CA] to-[#301CA0] bg-clip-text text-transparent">
              PrepMate
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            Practice React, JavaScript, and CSS questions with detailed
            explanations. Track your progress and prepare smarter for your dream
            job.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/questions">
              <Button>Explore Questions →</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary">Get Started</Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative z-10">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#F29AAE] mr-2"></div>
              <h3 className="font-bold text-lg text-gray-900">
                What You Can Do
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Browse 100+ curated frontend interview questions",
                "Detailed explanations with code examples",
                "Track progress and identify weak areas",
                "Login for personalized dashboard",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7132CA]/10 to-[#C47BE4]/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7132CA]"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2 FEATURES */}
      <section>
        <SectionTitle
          title="Core Features"
          subtitle="Everything you need for effective interview preparation"
        />
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {[
            [
              "🧩 Question Library",
              "Public questions list fetched from JSON API",
              "#7132CA",
            ],
            [
              "📖 Detailed Solutions",
              "Full details page with examples and explanations",
              "#C47BE4",
            ],
            [
              "🔐 User Dashboard",
              "Cookie-based auth with protected dashboard route",
              "#301CA0",
            ],
          ].map(([title, desc, color]) => (
            <div
              key={title}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{ background: `${color}15` }}
              >
                <span className="text-2xl">{title.split(" ")[0]}</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {title.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-gray-600 text-sm">{desc}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">
                  Built with Next.js 15
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 CATEGORIES */}
      <section className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 lg:p-12">
        <SectionTitle
          title="Focus Areas"
          subtitle="Master essential frontend technologies"
        />
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            "React Hooks",
            "JavaScript ES6+",
            "CSS Grid & Flexbox",
            "Performance",
            "System Design",
            "Interview Tips",
          ].map((category) => (
            <span
              key={category}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7132CA]/10 to-[#C47BE4]/10 text-[#7132CA] text-sm font-semibold hover:from-[#7132CA]/20 hover:to-[#C47BE4]/20 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* 4 HOW IT WORKS */}
      <section>
        <SectionTitle
          title="How It Works"
          subtitle="Get interview-ready in 3 simple steps"
        />
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7132CA]/20 via-[#C47BE4]/20 to-[#F29AAE]/20 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              [
                "01",
                "Browse & Practice",
                "Access our curated collection of frontend interview questions",
                "from-[#7132CA] to-[#C47BE4]",
              ],
              [
                "02",
                "Learn & Understand",
                "Study detailed explanations with real code examples",
                "from-[#C47BE4] to-[#F29AAE]",
              ],
              [
                "03",
                "Track & Improve",
                "Login to track progress and identify areas for improvement",
                "from-[#F29AAE] to-[#7132CA]",
              ],
            ].map(([step, title, desc, gradient]) => (
              <div
                key={step}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}
                >
                  <span className="text-white font-bold text-xl">{step}</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500">
                    Step {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 WHY PREPMATE */}
      <section className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <SectionTitle
              title="Why Choose PrepMate?"
              subtitle="Designed for effective learning"
            />
          </div>
          <div>
            <ul className="space-y-5">
              {[
                [
                  "🎯",
                  "Focused Learning",
                  "Curated content targeting actual interview questions",
                ],
                [
                  "⚡",
                  "Fast & Efficient",
                  "Quick access to explanations without distractions",
                ],
                [
                  "📈",
                  "Progress Tracking",
                  "Monitor your improvement over time",
                ],
                ["🔄", "Regular Updates", "Content updated with latest trends"],
              ].map(([icon, title, desc]) => (
                <li
                  key={title}
                  className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl mr-4">{icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 TESTIMONIALS */}
      <section>
        <SectionTitle
          title="What Users Say"
          subtitle="Join hundreds of successful candidates"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Sadia H.",
              "Frontend Developer @Google",
              "Finally a project that actually helps my learning! The explanations are crystal clear.",
            ],
            [
              "Rafi Ahmed",
              "React Developer",
              "Simple design but really useful and clean. Perfect for interview preparation.",
            ],
            [
              "Nila Chow.",
              "Software Engineer",
              "Great for tracking interview practice. Helped me land my dream job!",
            ],
          ].map(([name, role, quote]) => (
            <div
              key={name}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7132CA] to-[#C47BE4] flex items-center justify-center text-white font-bold">
                  {name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7 CTA */}
      <section className="relative bg-gradient-to-br from-[#301CA0] via-[#7132CA] to-[#C47BE4] text-white rounded-3xl p-8 lg:p-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Ace Your Interview?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of developers who improved their skills with
              PrepMate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questions">
                <Button className="bg-white text-[#301CA0] hover:bg-gray-100 hover:scale-105 transition-transform">
                  Start Practicing Now →
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Create Free Account
                </Button>
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              No credit card required • 100+ free questions • Updated weekly
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
