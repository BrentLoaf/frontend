import "./globals.css";
import Header from "@/app/custom/Header";
import Underline from "./custom/Underline";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <div
          className="fixed inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('./bg.png')" }}
        />
        <div className="fixed inset-0 bg-gradient-to-r from-black via-black/75 to-black/25 pointer-events-none z-10" />
        <div className="relative min-h-screen flex flex-col z-20">

          <Header />

          <main className="pt-20 flex flex-col flex-1">
            {children}
          </main>

          <div className="px-35 pb-4">
            <div className="w-full h-[1px] bg-white/20 relative z-30" />
          </div>
          <div className="flex justify-center items-center pb-5">
            <p className="text-[#919191]">© {new Date().getFullYear()} Brent. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  );
}