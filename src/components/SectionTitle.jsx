// export default function SectionTitle({ title, subtitle }) {
//   return (
//     <div className="mb-2">
//       <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
//       {subtitle ? (
//         <p className="text-slate-600 mt-1 text-sm md:text-base">{subtitle}</p>
//       ) : null}
//     </div>
//   );
// }
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="relative inline-block">
        {/* Decorative Line */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-gradient-to-b from-[#7132CA] to-[#C47BE4] rounded-full"></div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 pl-2">
          {title}
        </h2>

        {/* Decorative Dots */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7132CA]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C47BE4]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#F29AAE]"></div>
        </div>
      </div>

      {/* Subtitle */}
      {subtitle ? (
        <div className="mt-3 sm:mt-4 relative">
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl pl-2">
            {subtitle}
          </p>
          {/* Bottom border accent */}
          <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#7132CA] to-[#C47BE4] rounded-full"></div>
        </div>
      ) : null}
    </div>
  );
}
