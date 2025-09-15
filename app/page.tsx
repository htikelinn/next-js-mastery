'use client'
import { useState } from "react";
import Hello from "./components/hello";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-5xl text-pink-600 text-center">Welcome to Next.js</h1>
            <h2 className="text-3xl text-sky-600 text-center">Htin Project Deploy to VERCEL Cloud</h2>
            <p>{new Date().toLocaleTimeString()}</p>
            <p className="text-2xl">This is Testing Page to Deploy form Git to vercel Cloud</p>
            <div className="flex gap-3">
                <h1>Count: {count}</h1>
                <button className="btn btn-primary px-2" onClick={() => setCount(count + 1)}>Increase</button>
                <button className="btn btn-warning px-2" onClick={() => setCount(count - 1)}>Decrease</button>
                <button className="btn btn-error px-2" onClick={() => setCount(0)}>Reset</button>
            </div>

            <Hello />
        </>
    );
}
