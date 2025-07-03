export default function SmallPostCard({ post }: { post: { title: string; body: string } }) {
    return (
        <div className="w-[50vh] shrink-0">
            <div className="rounded-2xl border border-gray-200 shadow-md p-8 bg-white hover:shadow-lg transition-shadow">
                <h5 className="text-2xl font-bold text-gray-800">{post.title}</h5>
                <p className="text-gray-700 text-base mt-4">{post.body.slice(0, 200)}</p>
            </div>
        </div>
    );
}
