// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Container from "@/components/Container";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "PrepMate",
//   description: "Frontend Interview Prep App",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-slate-50 text-slate-900">
//         <Navbar />
//         <Container>{children}</Container>
//         <Footer className="border-t bg-white"></Footer>
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrepMate | Frontend Interview Preparation Platform",
  description:
    "Ace your frontend interviews with curated questions, detailed explanations, and progress tracking. Practice React, JavaScript, and CSS with PrepMate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7132CA" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 antialiased">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#7132CA]/5 to-[#C47BE4]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#F29AAE]/5 to-[#301CA0]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1 pt-6 sm:pt-8">
            <Container>{children}</Container>
          </main>

          <Footer />
        </div>

        {/* Loading Indicator for route transitions */}
        <div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7132CA] via-[#C47BE4] to-[#F29AAE] opacity-0 animate-pulse pointer-events-none"
          id="global-loading-bar"
        ></div>
      </body>
    </html>
  );
}
