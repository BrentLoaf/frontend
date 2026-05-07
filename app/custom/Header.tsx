"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { name: "Home", path: "/" },
        //{ name: "Projects", path: "/pages/projects" },
        //{ name: "Skills", path: "/pages/skills" },
        { name: "About", path: "/pages/about" },
        { name: "Contacts", path: "/pages/contacts" },
    ];

    return (
        <header className="pb-4 p-4 bg-black/35 text-white fixed top-0 left-0 w-full z-50 backdrop-blur shadow-xl border-b border-white/25 flex justify-between items-center">
            <div className="font-bold text-4xl">
                <Button variant="none" onClick={() => router.push("/")} className="pl-7">
                    <span className="text-[#00C97A] [text-shadow:0_0_12px_#00C97A90]">Brent</span>
                    <span className="text-[#ff006a] [text-shadow:0_0_12px_#ff006a90]">Loaf</span>
                    <span className="text-white">.dev</span>
                </Button>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 flex divide-x divide-white/20 text-lg">
                {navItems.map((item) => (
                    <Button
                        key={item.path}
                        variant={pathname === item.path ? "selected" : "ghost"}
                        onClick={() => router.push(item.path)}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
            <div className="flex gap-4 text-lg">
                <Button wrapperClassName="pr-10"
                    variant="glow"
                    onClick={() => router.push("/pages/contacts")}
                >
                    Contact Me ✉
                </Button>
            </div>
        </header>
    );
}