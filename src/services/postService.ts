const posts = [
    {
        title: "Mit første skridt mod SEO ekspert!",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. vero, fugiat error aspernatur amet alias et fugit veniam.",
    },
    {
        title: "14 plads til Cybermesterskaberne 2025",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. vero, fugiat error aspernatur amet alias et fugit veniam.",
    },
    {
        title: "Mit andre skridt mod Cybersecurity",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat  Lorem ipsum dolor sit ",
    },
    {
        title: "Cybersecurity for All - 12 tips til sikkerhed",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat  Lorem ipsum dolor sit ",
    },
    {
        title: "Cybersecurity in the Workplace",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat vero, fugiat error aspernatur amet alias et fugit veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus saepe accusamus facere sequi, vel quam sapiente eaque laboriosam ullam libero placeat  Lorem ipsum dolor sit ",
    },
];

export async function getRecentPosts(startIndex: number, limit: number) {
    if (startIndex >= posts.length || limit <= 0) {
        return [];
    }
    return posts.slice(startIndex, startIndex + limit);
}

export async function searchPosts(query: string, limit: number) {
    return posts.slice(0, limit);
}
