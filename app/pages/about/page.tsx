"use client";

import Card from "@/app/custom/Card";
import Button from "@/app/custom/Button";
import { Box, Link, WrenchIcon } from "lucide-react";
import { DiJava, DiLinux, DiMysql } from "react-icons/di";
import { SiGit, SiReact, SiSpringboot } from "react-icons/si";
import { BiCloudUpload, BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col justify-start">
                <div className="p-20 px-35 flex flex-col justify-start">
                    <h1 className="font-bold text-white text-5xl py-4 max-w-200">About Me</h1>
                    <h1 className="font-bold text-white text-3xl py-1 max-w-200">Java Developer for Backend APIs & Business Tools</h1>
                    <p className="text-white/60 py-3 max-w-200">I’m a Java developer with several years of experience building a range of applications, from Minecraft plugins and mods to backend tools and REST APIs. Over time, I’ve developed a strong understanding of Java and how to apply it to real-world systems, especially on the backend. </p>
                    <p className="text-white/60 py-3 max-w-200">Whether it’s a new backend system, improvements to an existing API, or a custom tool for your workflow, I focus on delivering practical results that are easy to maintain and built to scale with your needs.</p>
                    <div className="min-h-[80px] flex py-8">
                        <div className="pr-10">
                            <div className="min-w-75 flex">
                                <div className="bg-[#00C97A20] w-20 h-20 rounded-full border border-2 border-[#00C97A80] shadow-[0_0_15px_#00C97A70] flex justify-center items-center">
                                    <h1 className="font-bold text-3xl text-[#00C97A]">{"</>"}</h1>
                                </div>
                                <div className="min-w-50 pl-5 flex flex-col justify-center">
                                    <h1 className="font-bold text-xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">Java Backend Developer</h1>
                                    <p className="text-white/60">Building clean and reliable APIs</p>
                                </div>
                            </div>
                        </div>
                        <div className="pr-10">
                            <div className="min-w-75 flex">
                                <div className="bg-[#ff006a20] w-20 h-20 rounded-full border border-2 border-[#ff006a80] shadow-[0_0_15px_#ff006a70] flex justify-center items-center">
                                    <Box className="text-[#ff006a] w-11 h-11" />
                                </div>
                                <div className="min-w-50 pl-5 flex flex-col justify-center">
                                    <h1 className="font-bold text-xl text-[#ff006a] [text-shadow:0_0_8px_#ff006a80]">Reliable Project Delivery</h1>
                                    <p className="text-white/60">Clear communication and consistent results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[2px] bg-white/10" />
                    <div className="flex max-h-15 items-center div-10 py-15">
                        <div className="pr-6">
                            <div className="max-w-[2px] min-w-[2px] min-h-10 bg-[#00C97A80]" />
                        </div>
                        <h1 className="font-bold text-white text-3xl max-w-200">Technologies I Work With</h1>
                    </div>
                    <div className="flex justify-center flex-wrap gap-1">

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#00C97A70] flex items-center justify-center" borderColor="#00C97A80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-22 h-22">
                                    <DiJava className="absolute h-22 w-22 text-[#00C97A] blur" />
                                    <DiJava className="absolute h-22 w-22 text-[#00C97A]" />
                                </div>
                                <p className="text-lg text-white pt-2">Java</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#ff006a70] flex items-center justify-center" borderColor="#ff006a80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-19 h-19">
                                    <SiSpringboot className="absolute h-19 w-19 text-[#ff006a75] blur" />
                                    <SiSpringboot className="absolute h-19 w-19 text-[#ff006a]" />
                                </div>
                                <p className="text-lg text-white pt-2">SpringBoot</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#00C97A70] flex items-center justify-center" borderColor="#00C97A80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-22 h-22">
                                    <DiMysql className="absolute h-22 w-22 text-[#00C97A] blur" />
                                    <DiMysql className="absolute h-22 w-22 text-[#00C97A]" />
                                </div>
                                <p className="text-lg text-white pt-2">MySQL</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#ff006a70] flex items-center justify-center" borderColor="#ff006a80">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-6xl text-[#ff006a] [text-shadow:0_0_8px_#ff006a80]">{"{..}"}</h1>
                                <p className="text-lg text-white pt-5">Rest APIs</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#00C97A70] flex items-center justify-center" borderColor="#00C97A80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-22 h-22">
                                    <SiReact className="absolute h-22 w-22 text-[#00C97A90] blur" />
                                    <SiReact className="absolute h-22 w-22 text-[#00C97A]" />
                                </div>
                                <p className="text-lg text-white pt-2">React</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#ff006a70] flex items-center justify-center" borderColor="#ff006a80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-22 h-22">
                                    <DiLinux className="absolute h-22 w-22 text-[#ff006a75] blur" />
                                    <DiLinux className="absolute h-22 w-22 text-[#ff006a]" />
                                </div>
                                <p className="text-lg text-white pt-2">Linux</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" className="min-w-45 max-w-45 min-h-40 max-h-40 shadow-[0_0_15px_#00C97A70] flex items-center justify-center" borderColor="#00C97A80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-22 h-22">
                                    <SiGit className="absolute h-22 w-22 text-[#00C97A75] blur" />
                                    <SiGit className="absolute h-22 w-22 text-[#00C97A]" />
                                </div>
                                <p className="text-lg text-white pt-2">Git</p>
                            </div>
                        </Card>
                    </div>
                    <div className="min-h-[2px] bg-white/10" />
                    <div className="flex max-h-15 items-center div-10 py-15">
                        <div className="pr-6">
                            <div className="max-w-[2px] min-w-[2px] min-h-10 bg-[#00C97A80]" />
                        </div>
                        <h1 className="font-bold text-white text-3xl max-w-200">What I Offer</h1>
                    </div>
                    <div className="flex justify-center flex-wrap gap-1">

                        <Card wrapperClassName="pl-0 pt-1" color="#00C97A12" className="w-80 h-90 shadow-[0_0_15px_#00C97A70] flex items-center justify-center" borderColor="#00C97A80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-22 h-22">
                                    <BiCloudUpload className="absolute h-22 w-22 text-[#00C97A] blur" />
                                    <BiCloudUpload className="absolute h-22 w-22 text-[#00C97A]" />
                                </div>
                                <p className="text-2xl text-white pt-3">Backend APIs</p>
                                <p className="text-white/60 py-2 max-w-200">I build clean and reliable REST APIs in Java designed to handle real-world data and workflows. This includes CRUD systems, request handling, and structured backend logic tailored to your project needs.</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" color="#ff006a12" className="w-80 h-90 shadow-[0_0_15px_#ff006a70] flex items-center justify-center" borderColor="#ff006a80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-18 h-18">
                                    <WrenchIcon className="absolute h-18 w-18 text-[#ff006a] blur" />
                                    <WrenchIcon className="absolute h-18 w-18 text-[#ff006a]" />
                                </div>
                                <p className="text-2xl text-white pt-3">Custom Business Tools</p>
                                <p className="text-white/60 py-2 max-w-200">I develop custom Java-based tools that help automate or simplify business processes. Whether it’s internal workflows, data processing, or task automation, I focus on building practical systems that save time and reduce manual work.</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" color="#00C97A12" className="w-80 h-90 shadow-[0_0_15px_#00C97A70] flex items-center justify-center" borderColor="#00C97A80">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-18 h-18">
                                    <Link className="absolute h-18 w-18 text-[#00C97A] blur" />
                                    <Link className="absolute h-18 w-18 text-[#00C97A]" />
                                </div>
                                <p className="text-2xl text-white pt-3">System Integration</p>
                                <p className="text-white/60 py-2 max-w-200">I can connect different systems together through APIs and backend logic, allowing your services, databases, or tools to communicate smoothly. This helps unify your workflow and reduce fragmentation across platforms.</p>
                            </div>
                        </Card>

                        <Card wrapperClassName="pl-0 pt-1" color="#ff006a12" className="w-80 h-90 shadow-[0_0_15px_#ff006a70] flex items-center justify-center" borderColor="#ff006a">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-18 h-18">
                                    <BiUser className="absolute h-18 w-18 text-[#ff006a] blur" />
                                    <BiUser className="absolute h-18 w-18 text-[#ff006a]" />
                                </div>
                                <p className="text-2xl text-white pt-3">Clear Communication</p>
                                <p className="text-white/60 py-2 max-w-200">I prioritize clear and consistent communication throughout a project. This includes understanding requirements properly, giving updates when needed, and making sure expectations are aligned before and during development.</p>
                            </div>
                        </Card>
                    </div>

                    <div className="min-h-[2px] bg-white/10" />
                    <div className="flex max-h-15 items-center div-10 py-15">
                        <div className="pr-6">
                            <div className="max-w-[2px] min-w-[2px] min-h-10 bg-[#00C97A80]" />
                        </div>
                        <h1 className="font-bold text-white text-3xl max-w-200">Experience Highlights</h1>
                    </div>

                    <div className="min-h-[120px] flex divide-x divide-white/20 pb-8 flex justify-center flex-wrap gap-10">
                        <div className="pr-6">
                            <div className="w-40 min-h-[120px] justify-center text-center">
                                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">9+</h1>
                                <p className="py-3 text-white">years programming experience</p>
                            </div>
                        </div>
                        <div className="pr-6">
                            <div className="w-40 min-h-[120px] justify-center text-center">
                                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">5+</h1>
                                <p className="py-3 text-white">languages I can work with</p>
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
                                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">24/7</h1>
                                <p className="py-3 text-white">Problem Solving</p>
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="w-40 min-h-[120px] justify-center text-center">
                                <h1 className="font-bold text-5xl text-[#00C97A] [text-shadow:0_0_8px_#00C97A80]">100%</h1>
                                <p className="py-3 text-white">Self Driven and Focused</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center flex-wrap gap-1 pt-15">
                        <Card wrapperClassName="pt-1" className="shadow-[0_0_15px_#00C97A70] flex flex-col justify-center items-center w-200" borderColor="#00C97A" color="#00C97A12">
                            <h1 className="font-bold text-white text-3xl">Interested in working together?</h1>
                            <h1 className="text-white/60 pt-3 pb-8">Contact me here and we can start discussing about what exactly you're looking for.</h1>
                            <div className="flex flex-row justify-start pb-5 px-18">
                                {/* <Button variant="glow" className="!px-10 !py-3" wrapperClassName="!px-10">View Projects ➜</Button> */}
                                <Button variant="glow" className="!px-10 !py-3" wrapperClassName="!px-10" color="#ff006a" onClick={() => router.push("/pages/contacts")}>Contact Me ✉</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    );
}