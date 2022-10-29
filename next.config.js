/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    runtime: 'experimental-edge', // 'node.js' (default) | experimental-edge
    appDir: true,
  },
}
