const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/miodrag-portfolio" : "",
  assetPrefix: isProd ? "/miodrag-portfolio/" : "",
};

export default nextConfig;
