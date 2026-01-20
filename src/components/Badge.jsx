// export default function Badge({ children, tone = "neutral" }) {
//   const styles = {
//     neutral: "bg-slate-100 text-slate-700",
//     indigo: "bg-indigo-100 text-indigo-700",
//     green: "bg-green-100 text-green-700",
//     red: "bg-red-100 text-red-700",
//     yellow: "bg-yellow-100 text-yellow-700",
//   };

//   return (
//     <span
//       className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[tone]}`}
//     >
//       {children}
//     </span>
//   );
// }
export default function Badge({ children, tone = "neutral" }) {
  const styles = {
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
    indigo:
      "bg-gradient-to-r from-[#7132CA]/10 to-[#C47BE4]/10 text-[#7132CA] border border-[#7132CA]/20",
    green:
      "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200",
    red: "bg-gradient-to-r from-red-50 to-rose-50 text-rose-700 border border-rose-200",
    yellow:
      "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border border-amber-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${styles[tone]} transition-all duration-200 hover:scale-105 active:scale-95`}
    >
      <span className="relative">
        {children}
        {tone === "indigo" && (
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#F29AAE]"></span>
        )}
      </span>
    </span>
  );
}
