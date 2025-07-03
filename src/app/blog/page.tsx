import BigPostCard from "@/components/Cards/BigPostCard/BigPostCard";
import SmallPostCard from "@/components/Cards/SmallPostCard/SmallPostCard";
import { getRecentPosts } from "@/services/postService";

export default async function BlogPage() {
    const recentPosts = await getRecentPosts(0, 4);

    return (
        <main className="px-6 md:px-20 lg:px-40 py-10 bg-white space-y-10">
            <section className="text-center md:text-left space-y-4">
                <h2 className="text-4xl font-bold text-gray-800 underline decoration-primary">My Blog</h2>
                <h3 className="text-gray-600 leading-relaxed max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui iusto omnis architecto
                    repellendus cumque dignissimos optio.
                </h3>
            </section>

            <section className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-800">Recent posts</h4>
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {recentPosts.map((post, index) => (
                        <SmallPostCard key={index} post={post} />
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-800">Search through posts</h4>
                <div className="flex flex-col gap-6 overflow-x-auto pb-4">
                    {recentPosts.map((post, index) => (
                        <BigPostCard key={index} post={post} />
                    ))}
                </div>
            </section>
        </main>
    );
}
