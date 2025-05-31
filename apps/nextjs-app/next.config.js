/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@sparticuz/chromium',
    'puppeteer-core',
    '@prisma/client',
    'prisma'
  ],
    reactStrictMode: true,
    // swcMinify: true, // This option is no longer valid in Next.js 15
    images:{
        remotePatterns: [
            {hostname: '0mckiahhlguhefmi.public.blob.vercel-storage.com', protocol:'https'},
            {hostname: 'strapi.bayesian-labs.com', protocol:'https'},
            {hostname: 'oaidalleapiprodscus.blob.core.windows.net', protocol:'https'},
            {hostname: 'photo.100xdevs.com', protocol:'https'},
            {hostname: 'r2-us-west.photoai.com', protocol:'https'},
            {hostname: 'lh3.googleusercontent.com', protocol:'https'},

        ],
        unoptimized: true,
    },
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
};

module.exports = nextConfig;
