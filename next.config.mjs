/** All imagery is served from /public/images, so no remote image hosts are needed. */
const nextConfig = { images: { formats: ['image/avif', 'image/webp'] } };
export default nextConfig;
