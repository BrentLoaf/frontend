"use client";

import Card from "@/app/custom/Card";
import Button from "@/app/custom/Button";
import { SiDiscord, SiGithub } from "react-icons/si";
import { Lightbulb } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function Home() {

    const [copiedText, setCopiedText] = useState("");

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);

        setCopiedText(text);

        setTimeout(() => {
            setCopiedText("");
        }, 2000);
    };

    const [sent, setSent] = React.useState(false);

    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-col justify-start">
                    <div className="p-20 px-35 flex flex-col justify-start">
                        <h1 className="text-2xl">
                            <span className="text-[#00C97A] [text-shadow:0_0_8px_#00C97A]">LET'S </span>
                            <span className="text-[#ff006a] [text-shadow:0_0_12px_#ff006a]">CONNECT</span>
                        </h1>
                        <h1 className="font-bold text-white text-5xl py-4 max-w-200">Let's build the tool you need</h1>
                        <p className="text-white/60 py-3 max-w-200 text-lg">I'm always open to discussing new projects, creative ideas, or to bring your ideas to life. </p>

                        <div className="flex flex-col py-8 divide-y divide-white/20">
                            <div className="pb-4 w-full max-w-181">
                                <div className="w-full flex items-center">
                                    <div className="bg-[#00C97A20] w-20 h-20 rounded-xl border-2 border-[#00C97A80] shadow-[0_0_15px_#00C97A70] flex justify-center items-center shrink-0">
                                        <h1 className="text-5xl text-[#00C97A]">✉</h1>
                                    </div>
                                    <div className="flex-1 pl-5 flex flex-col justify-center">
                                        <h1 className="font-bold text-white text-xl">Email</h1>
                                        <p className="text-white/60">business.brentloaf@gmail.com</p>
                                    </div>
                                    <Button
                                        variant="text"
                                        wrapperClassName="ml-auto shrink-0"
                                        onClick={() => copyToClipboard("business.brentloaf@gmail.com")}
                                    >
                                        <p className="text-[#00C97A] [text-shadow:0_0_8px_#00C97A]">
                                            {copiedText === "business.brentloaf@gmail.com" ? "Copied!" : "Copy Email"}
                                        </p>
                                    </Button>
                                </div>
                            </div>

                            <div className="py-4 w-full max-w-181">
                                <div className="w-full flex items-center">
                                    <div className="bg-[#ff006a20] w-20 h-20 rounded-xl border-2 border-[#ff006a80] shadow-[0_0_15px_#ff006a70] flex justify-center items-center shrink-0">
                                        <SiDiscord className="text-[#ff006a] w-11 h-11" />
                                    </div>
                                    <div className="flex-1 pl-5 flex flex-col justify-center">
                                        <h1 className="font-bold text-white text-xl">Discord</h1>
                                        <p className="text-white/60">brentloaf.dev</p>
                                    </div>
                                    <Button
                                        variant="text"
                                        wrapperClassName="ml-auto shrink-0"
                                        onClick={() => copyToClipboard("brentloaf.dev")}
                                    >
                                        <p className="text-[#ff006a] [text-shadow:0_0_8px_#ff006a80]">
                                            {copiedText === "brentloaf.dev" ? "Copied!" : "Copy Username"}
                                        </p>
                                    </Button>
                                </div>
                            </div>

                            <div className="py-4 w-full max-w-181">
                                <div className="w-full flex items-center">
                                    <div className="bg-[#00C97A20] w-20 h-20 rounded-xl border-2 border-[#00C97A80] shadow-[0_0_15px_#00C97A70] flex justify-center items-center shrink-0">
                                        <SiGithub className="text-[#00C97A] w-11 h-11" />
                                    </div>
                                    <div className="flex-1 pl-5 flex flex-col justify-center">
                                        <h1 className="font-bold text-white text-xl">GitHub</h1>
                                        <p className="text-white/60">github.com/BrentLoaf</p>
                                    </div>
                                    <Button
                                        variant="text"
                                        wrapperClassName="ml-auto shrink-0"
                                        onClick={() => copyToClipboard("https://github.com/BrentLoaf")}
                                    >
                                        <p className="text-[#00C97A] [text-shadow:0_0_8px_#00C97A]">
                                            {copiedText === "https://github.com/BrentLoaf" ? "Copied!" : "Copy GitHub"}
                                        </p>
                                    </Button>
                                </div>
                            </div>

                            <Card wrapperClassName="pl-0 pt-6" className="shadow-[0_0_15px_#00C97A70] !max-w-181 !min-h-29" borderColor="#00C97A70" color="#00000000">
                                <div className="flex justify-start text-start">
                                    <div className="relative w-12 h-12 pt-2">
                                        <Lightbulb className="absolute h-12 w-12 text-[#00C97A] blur" />
                                        <Lightbulb className="absolute h-12 w-12 text-[#00C97A]" />
                                    </div>
                                    <div className="min-w-50 pl-5 flex flex-col justify-center pt-2">
                                        <h1 className="text-lg text-white">Want a reply as soon as possible?</h1>
                                        <p className="text-white/60">Email or Discord is the fastest way to get a response from me.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div >
                <div className="flex justify-center items-center flex-1">
                    <div className="p-20 px-35 flex flex-col justify-start">
                        <Card
                            className="!min-w-150 shadow-[0_0_15px_#00C97A70]"
                            color="#00C97A10"
                            borderColor="#00C97A90"
                            wrapperClassName="!pl-0 !pr-50 !pt-0"
                        >
                            {sent ? (
                                <div className="py-3 text-center">
                                    <h2 className="text-4xl font-bold text-[#00C97A] [text-shadow:0_0_15px_#00C97A70]">
                                        Message Sent!
                                    </h2>
                                    <p className="text-white/60 mt-2">
                                        Thanks for reaching out! You should expect an email in 3–5 business days.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    className="flex flex-col justify-center items-center"
                                    action="https://formspree.io/f/mkoyzyrw"
                                    method="POST"
                                    onSubmit={async (e) => {
                                        e.preventDefault();

                                        const form = e.currentTarget;

                                        const response = await fetch(form.action, {
                                            method: "POST",
                                            body: new FormData(form),
                                            headers: {
                                                Accept: "application/json"
                                            }
                                        });

                                        if (response.ok) {
                                            setSent(true);
                                            form.reset();
                                        } else {
                                            alert("Something went wrong.");
                                        }
                                    }}
                                >
                                    <h1 className="text-4xl font-bold pt-4">
                                        <span className="text-white">Want to contact me </span>
                                        <span className="text-[#00C97A] [text-shadow:0_0_12px_#00C97A]">now?</span>
                                    </h1>

                                    <p className="text-white/60 py-3 max-w-200 text-lg text-center">
                                        If you have a question, want a quote, or want to work with me feel free to contact me here.
                                    </p>

                                    <div className="flex justify-center items-center w-121">
                                        <div className="pr-3 py-3 w-full">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="backdrop-blur bg-[#00000060] border border-[#00C97A70] rounded-xl px-4 py-3 text-white w-full"
                                            />
                                        </div>

                                        <div className="pl-3 py-3 w-full">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="backdrop-blur bg-[#00000060] border border-[#00C97A70] rounded-xl px-4 py-3 text-white w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <div className="py-3 w-121 max-w-121">
                                            <textarea
                                                name="message"
                                                placeholder="Tell me about your project or idea..."
                                                className="backdrop-blur bg-[#00000060] border border-[#00C97A70] rounded-xl px-4 py-3 text-white w-full h-50 resize-none"
                                            />
                                        </div>

                                        <div className="py-3 w-121 max-w-121">
                                            <input
                                                type="text"
                                                name="details"
                                                placeholder="Enter additional details (optional)"
                                                className="backdrop-blur bg-[#00000060] border border-[#00C97A70] rounded-xl px-4 py-3 text-white w-full"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="glow"
                                            wrapperClassName="py-4"
                                            className="w-100 h-15 text-xl font-bold"
                                            color="#ff006a"
                                        >
                                            Send Message ✉
                                        </Button>
                                    </div>

                                    <p className="text-white/60 max-w-200 text-center">
                                        Your information will not be shared.
                                    </p>
                                </form>
                            )}
                        </Card>
                    </div>
                </div>
            </div >
        </>
    );
}