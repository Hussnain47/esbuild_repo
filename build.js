const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .build({
    entryPoints: ["./src/index.js"],
    outfile: "./build/assets/app.js",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    plugins: [inlineImage()],
    logLevel: "verbose",
  })
  .catch(() => process.exit(1));
