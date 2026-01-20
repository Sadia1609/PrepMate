
export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content Container */}
      <div className="relative">
        {/* Title with Icon */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7132CA] to-[#C47BE4]"></div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
        </div>

        {/* Main Value */}
        <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#301CA0] to-[#7132CA] bg-clip-text text-transparent mb-2">
          {value}
        </p>

        {/* Subtitle */}
        {subtitle ? (
          <div className="flex items-center pt-3 border-t border-gray-100 mt-3">
            <div className="w-6 h-0.5 bg-gradient-to-r from-[#C47BE4] to-[#F29AAE] rounded-full mr-2"></div>
            <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>
          </div>
        ) : null}

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-2xl">
          <div className="absolute -top-3 -right-3 w-6 h-6 rotate-45 bg-gradient-to-br from-[#7132CA]/10 to-[#C47BE4]/10"></div>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7132CA] to-[#C47BE4] group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
  );
}
