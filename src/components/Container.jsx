// export default function Container({ children }) {
//   return <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>;
// }
export default function Container({ children }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-10">{children}</div>
      </div>
    </main>
  );
}
