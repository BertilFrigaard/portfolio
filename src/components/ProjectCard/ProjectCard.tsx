export default function ProjectCard() {
    return (
        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white hover:shadow-lg cursor-pointer transition-shadow group">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">Snudget</h2>
                <h3 className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm text-primary font-medium">
                    Click to view
                </h3>
            </div>

            <p className="text-gray-700 mb-4">
                A gamified budgeting app built with Node.js, PostgreSQL, and .NET MAUI. Track savings, compete with
                friends, and visualize progress with interactive charts.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="text-sm px-2 py-1 rounded-lg bg-primary text-white">Node.js</span>
                <span className="text-sm px-2 py-1 rounded-lg bg-primary text-white">PostgreSQL</span>
                <span className="text-sm px-2 py-1 rounded-lg bg-primary text-white">Next.js</span>
                <span className="text-sm px-2 py-1 rounded-lg bg-primary text-white">.NET MAUI</span>
            </div>
        </div>
    );
}
