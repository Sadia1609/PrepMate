
import SectionTitle from "@/components/SectionTitle";
import QuestionCard from "@/components/QuestionCard";
import Badge from "@/components/Badge";
import { questions } from "@/data/questions";

export default function QuestionsPage() {
  // Group by category for filtering
  const categories = [...new Set(questions.map((q) => q.category))];

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10">
        <div className="max-w-4xl">
          <SectionTitle
            title="Interview Questions Library"
            subtitle="Browse our curated collection of frontend interview questions with detailed solutions"
          />

          {/* Stats */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#301CA0] to-[#7132CA] bg-clip-text text-transparent">
                  {questions.length}+
                </div>
                <div className="text-xs text-gray-500">Questions</div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#7132CA] to-[#C47BE4] bg-clip-text text-transparent">
                  {categories.length}
                </div>
                <div className="text-xs text-gray-500">Categories</div>
              </div>
            </div>

            <div className="ml-auto">
              <Badge tone="indigo" className="text-sm">
                Updated Weekly
              </Badge>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Filter by Category:
            </h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7132CA] to-[#301CA0] text-white text-sm font-semibold hover:shadow-md transition-shadow">
                All Categories
              </button>
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7132CA]/10 to-[#C47BE4]/10 text-[#7132CA] text-sm font-semibold hover:from-[#7132CA]/20 hover:to-[#C47BE4]/20 transition-all"
                >
                  {category}
                </button>
              ))}
              {categories.length > 4 && (
                <button className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200 transition-colors">
                  +{categories.length - 4} more
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Questions Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">All Questions</h2>
          <div className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#7132CA]">
              {questions.length}
            </span>{" "}
            questions
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {questions.map((q) => (
            <QuestionCard key={q.id} q={q} />
          ))}
        </div>

        {/* Loading More Indicator */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 rounded-full bg-[#7132CA] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#C47BE4] animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-[#F29AAE] animate-pulse delay-150"></div>
            <span className="ml-2 text-sm">Scroll for more questions</span>
          </div>
        </div>
      </section>
    </div>
  );
}
