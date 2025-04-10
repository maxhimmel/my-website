import withPayload from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-website-blob.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "bsajzz2q7yefclcv.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default withPayload(nextConfig);
