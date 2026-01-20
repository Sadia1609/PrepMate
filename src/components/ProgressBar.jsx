// export default function ProgressBar({ percent = 0 }) {
//   const safe = Math.min(100, Math.max(0, percent));

//   return (
//     <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
//       <div
//         className="h-3 bg-indigo-600 rounded-full transition-all"
//         style={{ width: `${safe}%` }}
//       />
//     </div>
//   );
// }
export default function ProgressBar({ percent = 0 }) {
  const safe = Math.min(100, Math.max(0, percent));

  return (
    <div className="relative w-full">
      {/* Background Track */}
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded-full h-3 overflow-hidden shadow-inner">
        {/* Progress Fill */}
        <div
          className="h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{
            width: `${safe}%`,
            background: `linear-gradient(90deg, #7132CA 0%, #C47BE4 ${Math.min(safe, 90)}%, #F29AAE 100%)`,
          }}
        />
      </div>

      {/* Percentage Label */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs font-medium text-gray-600">Progress</span>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-bold bg-gradient-to-r from-[#7132CA] to-[#301CA0] bg-clip-text text-transparent">
            {Math.round(safe)}%
          </span>
          {safe === 100 && (
            <span className="w-2 h-2 rounded-full bg-[#F29AAE] animate-pulse"></span>
          )}
        </div>
      </div>

      {/* Progress Indicator Line */}
      <div
        className="absolute top-0 left-0 w-0.5 h-4 -mt-0.5 bg-gradient-to-b from-[#7132CA] to-[#C47BE4] rounded-full transition-all duration-500 ease-out"
        style={{ left: `${safe}%` }}
      />
    </div>
  );
}
