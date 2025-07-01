/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://bertilfrigaard.dk",
    generateRobotsTxt: true,
    generateIndexSitemap: false, // optional; use if you don't need multi-sitemaps
    sitemapSize: 7000, // default is fine
    changefreq: "monthly",
    priority: 0.7,
};
