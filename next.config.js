/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // assuming you were using the Sanity.io image CDN
    // domains is an array of comma-separated strings
    // ['cdn.sanity.io', 'cdn.not-sanity.io', 'another domain']
    domains: ["www.pixabay.com"],
  },
};

module.exports = nextConfig;
