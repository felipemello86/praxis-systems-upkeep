/** @type {import('next').NextConfig} */
const nextConfig = {
  // Endereço comercial: praxis-systems.com.br/{cliente}/upkeep. O gateway
  // (apps/gateway) espelha esse caminho via rewrite pro deploy real deste
  // app — pra isso bater, este app precisa responder em /upkeep/*, não em
  // /*. Ver docs/ARCHITECTURE.md.
  basePath: "/upkeep",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
