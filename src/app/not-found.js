"use client";
import {FileSearch} from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={32} className="text-color-accent"/>
                <h1 className="text-color-accent text-2xl font-bold ">404 - Page Not Found</h1>
                <Link href={`/`} className="text-color-primary hover:text-color-accent transition-all underline">Back to Home</Link>
            </div>
        </div>
    )
}
export default Page;
