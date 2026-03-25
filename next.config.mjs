/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/trionyx-portfolio',
  assetPrefix: '/trionyx-portfolio/',
}

export default nextConfig