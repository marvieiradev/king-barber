/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "king-barber.s3.amazonaws.com", },
        ]
    }
};

export default nextConfig;
