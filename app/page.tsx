"use client";

import Card from "./custom/Card";
import Button from "./custom/Button";
import Underline from "./custom/Underline";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-start">
        <div className="p-20 px-35 flex flex-col justify-start">
          <h1 className="text-2xl">
            <span className="text-[#00C97A] [text-shadow:0_0_8px_#00C97A]">JAVA </span>
            <span className="text-[#ff006a] [text-shadow:0_0_12px_#ff006a]">DEVELOPER</span>
          </h1>
          <h1 className="font-bold text-5xl py-4 max-w-200">
            <span className="text-white">Developing </span>
            <span className="text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">scalable </span>
            <span className="text-white">business software, from internal tools to  </span>
            <span className="text-[#ff006a] [text-shadow:0_0_12px_#ff006a80]">client-facing applications. </span>
          </h1>
          <p className="text-white/60 py-3">I focus on building reliable, maintainable systems that are designed for real-world use, not just prototypes.</p>
          <div className="min-h-[120px] flex divide-x divide-white/20 py-8">
            <div className="pr-6">
              <div className="w-40 min-h-[120px] justify-center text-center">
                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">9+</h1>
                <p className="py-3 text-white">years programming experience</p>
              </div>
            </div>
            <div className="px-6">
              <div className="w-40 min-h-[120px] justify-center text-center">
                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">20+</h1>
                <p className="py-3 text-white">projects finished across domains</p>
              </div>
            </div>
            <div className="px-6">
              <div className="w-40 min-h-[120px] justify-center text-center">
                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">5+</h1>
                <p className="py-3 text-white">languages I can work with</p>
              </div>
            </div>
            <div className="px-6">
              <div className="w-40 min-h-[120px] justify-center text-center">
                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">98%+</h1>
                <p className="py-3 text-white">positive client feedback</p>
              </div>
            </div>
          </div>
          <Card wrapperClassName="pl-0 pt-1" className="shadow-[0_0_15px_#00C97A70] flex flex-col justify-center items-center" borderColor="#00C97A" color="#00C97A12">
            <h1 className="font-bold text-white text-3xl">What to learn more about me and my work?</h1>
            <Underline color="#ff006a" />
            <h1 className="text-white/60">Take a closer look at the projects I've worked on and learn more about me as a developer.</h1>
            <div className="flex flex-row justify-start items-center pt-8 px-18">
              {/* <Button variant="glow" className="!px-10 !py-3" wrapperClassName="!px-10">See My Work ➜</Button> */}
              <Button variant="glow" className="!px-10 !py-3" wrapperClassName="!px-10" color="#ff006a" onClick={() => router.push("/pages/about")}>About Me ➜</Button>
            </div>
          </Card>
        </div>
      </div >
    </>
  );
}