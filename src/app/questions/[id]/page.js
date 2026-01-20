
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { markStrong, markWeak } from "@/utils/progress";

export default function QuestionDetailsPage() {
  const params = useParams();
  const id = params?.id;

  const [q, setQ] = useState(null);
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionFeedback, setActionFeedback] = useState(null);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      setLoading(true);
      try {
        const [res1, res2] = await Promise.all([
          fetch(`/api/questions/${id}`),
          fetch(`/api/questions`),
        ]);
        const data1 = await res1.json();
        const data2 = await res2.json();
        setQ(data1);
        setAll(data2);
      } catch (error) {
        console.error("Error loading question:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const handleMarkStrong = async () => {
    await markStrong(q.id);
    setActionFeedback({ type: "strong", message: "Marked as strong topic!" });
    setTimeout(() => setActionFeedback(null), 3000);
  };

  const handleMarkWeak = async () => {
    await markWeak(q.id);
    setActionFeedback({
      type: "weak",
      message: "Marked as weak topic - needs practice!",
    });
    setTimeout(() => setActionFeedback(null), 3000);
  };

  const related = useMemo(() => {
    if (!q) return [];
    return all
      .filter((x) => x.category === q.category && x.id !== q.id)
      .slice(0, 12);
  }, [all, q]);

  if (!id || loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
        <div className="inline-flex items-center justify-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#7132CA] animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-[#C47BE4] animate-pulse delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-[#F29AAE] animate-pulse delay-300"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">
          Loading question details...
        </p>
      </div>
    );
  }

  if (!q) return null;

  return (
    <div className="space-y-8 lg:space-y-10">
      {/* Action Feedback Toast */}
      {actionFeedback && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-lg border transition-all duration-300 ${
            actionFeedback.type === "strong"
              ? "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 text-emerald-700"
              : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 text-amber-700"
          }`}
        >
          <div className="flex items-center space-x-2">
            {actionFeedback.type === "strong" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="font-medium">{actionFeedback.message}</span>
          </div>
        </div>
      )}

      {/* Main Question Section */}
      <section className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
        {/* Back Navigation */}
        <div className="px-6 sm:px-8 lg:px-10 pt-6">
          <Link
            href="/questions"
            className="inline-flex items-center text-sm font-medium text-[#7132CA] hover:text-[#301CA0] transition-colors group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Questions
          </Link>
        </div>

        {/* Question Content */}
        <div className="px-6 sm:px-8 lg:px-10 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7132CA] to-[#C47BE4] rounded-3xl blur opacity-20"></div>
              <img
                src={q.image}
                alt={q.title}
                className="relative w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl border-4 border-white shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
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

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {q.title}
              </h1>

              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 mb-6">
                <p className="leading-relaxed">{q.explanation}</p>
              </div>

              {/* Code Example */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Code Example:
                  </h3>
                  <button className="text-xs text-[#7132CA] hover:text-[#301CA0] font-medium">
                    Copy Code
                  </button>
                </div>
                <pre className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 rounded-xl p-4 sm:p-5 overflow-auto text-sm leading-relaxed shadow-inner border border-gray-700">
                  <code>{q.example}</code>
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleMarkStrong}
                    className="flex-1 min-w-[160px]"
                  >
                    <span className="flex items-center justify-center">
                      Mark as Strong
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
                  <Button
                    variant="secondary"
                    onClick={handleMarkWeak}
                    className="flex-1 min-w-[160px]"
                  >
                    <span className="flex items-center justify-center">
                      Mark as Weak
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
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>

                <p className="text-xs text-gray-500">
                  <span className="inline-flex items-center">
                    <svg
                      className="w-3 h-3 mr-1 text-[#7132CA]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Track your progress in the Dashboard
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Questions */}
      <section className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Related Questions in{" "}
            <span className="text-[#7132CA]">{q.category}</span>
          </h2>
          <p className="text-gray-600">
            Practice more questions from this category to master the topic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/questions/${item.id}`}
              className="group block bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge tone="indigo" className="text-xs">
                  {item.category}
                </Badge>
                <Badge
                  tone={
                    item.difficulty === "Easy"
                      ? "green"
                      : item.difficulty === "Medium"
                        ? "yellow"
                        : "red"
                  }
                  className="text-xs"
                >
                  {item.difficulty}
                </Badge>
              </div>
              <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-[#7132CA] transition-colors">
                {item.title}
              </h3>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">View Details</span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#7132CA] group-hover:translate-x-1 transition-all"
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

        {related.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No related questions found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
