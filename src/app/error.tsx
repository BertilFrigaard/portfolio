"use client";
export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-white text-gray-800">
            <h1 className="text-8xl font-extrabold tracking-tight">500</h1>
            <h2 className="text-2xl mt-4 mb-6">Internal Error</h2>
            <p className="text-gray-600 mb-8">You have encountered an error. We apologize.</p>
        </div>
    );
}
