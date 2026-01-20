
import Link from "next/link";
import Badge from "@/components/Badge";

export default function QuestionCard({ q }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={q.image}
          alt={q.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6">
        {/* Badge Container */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge tone="indigo">{q.category}</Badge>
          <Badge
            tone={
              q.difficulty === "Easy"
                ? "green"
                : q.difficulty === "Medium"
                  ? "yellow"
                  : "red"
            }
          >
            {q.difficulty}
          </Badge>
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-[#7132CA] transition-colors">
          {q.title}
        </h3>
        <p className="text-sm text-gray-600 mb-5 line-clamp-2">{q.short}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            href={`/questions/${q.id}`}
            className="inline-flex items-center text-sm font-semibold text-[#7132CA] hover:text-[#301CA0] group/link transition-colors duration-200"
          >
            View Details
            <svg
              className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200"
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
          </Link>

          {/* Stats (Optional - if you have additional data) */}
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <span className="flex items-center">
              <svg
                className="w-3.5 h-3.5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
