"use client";
import { useState } from "react";
import Hello from "./components/hello";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-white to-sky-100 p-6">
                {/* Title */}
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow-md">
                        Welcome to Next.js
                    </h1>
                    <h2 className="text-3xl font-semibold text-sky-600">
                        Htin Project Deploy to VERCEL Cloud
                    </h2>
                    <p className="text-gray-700 text-lg italic">
                        {new Date().toLocaleTimeString()}
                    </p>
                    <p className="text-2xl font-medium text-gray-800">
                        🚀 This is a Testing Page to Deploy from Git to Vercel Cloud
                    </p>
                </div>

                {/* Counter Section */}
                <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center gap-4 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Count: <span className="text-pink-600">{count}</span>
                    </h1>
                    <div className="flex gap-3">
                        <button
                            className="px-4 py-2 rounded-xl bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
                            onClick={() => setCount(count + 1)}
                        >
                            Increase
                        </button>
                        <button
                            className="px-4 py-2 rounded-xl bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-500 transition"
                            onClick={() => setCount(count - 1)}
                        >
                            Decrease
                        </button>
                        <button
                            className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
                            onClick={() => setCount(0)}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Hello Component */}
                <div className="mt-8">
                    <Hello />
                </div>
            </div>
        </>
    );
}
