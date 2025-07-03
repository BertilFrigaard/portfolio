export default function AdminPage() {
    return (
        <main className="px-6 md:py-6 md:px-20 lg:px-40 bg-white">
            <section className="md:pt-0 space-y-6 text-center md:text-start">
                <h2 className="text-4xl font-bold text-gray-800 underline decoration-primary">My Admin Panel</h2>
                <h3 className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui iusto omnis architecto
                    repellendus cumque dignissimos optio.
                </h3>
                <section>
                    <h4 className="text-2xl font-semibold text-gray-800">Recent posts</h4>
                    <div className="flex overflow-x-scroll space-x-20">
                        {[1, 2, 3].map((v) => (
                            <div
                                key={v}
                                className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white hover:shadow-lg cursor-pointer transition-shadow group"
                            >
                                <h5 className="text-xl font-semibold text-gray-800">Lorem bla De!</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe
                                    accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat
                                    vero, fugiat error aspernatur amet alias et fugit veniam.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h4 className="text-2xl font-semibold text-gray-800">Search through posts</h4>
                </section>
            </section>
        </main>
    );
}
