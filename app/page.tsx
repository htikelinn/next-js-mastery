import Hello from "./components/hello";

export default function Home() {
    console.log("What am I doing here? SERVER-SIDE RENDERING");
    return (
        <>
            <h1 className="text-5xl text-pink-600">Welcome to Next.js</h1>
            <h2 className="text-3xl text-sky-600">Htin Project Deploy to VERCEL Cloud</h2>
            <p>{new Date().toLocaleTimeString()}</p>

            <Hello />
        </>
    );
}
