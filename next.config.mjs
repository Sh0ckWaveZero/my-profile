import path from "node:path";
import { fileURLToPath } from "node:url";
import createMDX from "@next/mdx";

// Pin the workspace root to this project: stray lockfiles in the home
// directory otherwise make Turbopack infer the wrong root (warning at build).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "standalone",
  turbopack: {
    root: projectRoot,
  },
};

const withMDX = createMDX({
  // Remove options for now to work with Turbopack
});

export default withMDX(nextConfig);
