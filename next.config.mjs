/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["media.discordapp.net", "dimension-studio.net", "i.gifer.com"],
        unoptimized: true,
        minimumCacheTTL: 60,
    },
};

export default nextConfig;
