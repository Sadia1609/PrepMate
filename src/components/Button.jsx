// export default function Button({
//   children,
//   variant = "primary",
//   className = "",
//   ...props
// }) {
//   const base =
//     "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.98]";

//   const styles = {
//     primary: "bg-indigo-600 text-white hover:bg-indigo-700",
//     secondary: "border bg-white hover:bg-slate-50",
//     ghost: "hover:bg-slate-100",
//   };

//   return (
//     <button className={`${base} ${styles[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// }
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = {
    primary:
      "bg-gradient-to-r from-[#7132CA] to-[#C47BE4] text-white hover:from-[#5A27A6] hover:to-[#B369D0] shadow-sm hover:shadow-md focus:ring-[#7132CA]",
    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-sm focus:ring-gray-300",
    ghost:
      "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-200",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {variant === "primary" && (
        <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[#F29AAE] animate-pulse"></span>
      )}
    </button>
  );
}
