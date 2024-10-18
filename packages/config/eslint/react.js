const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/**
 * This is a custom ESLint configuration when using React and Typescript.
 *
 * This config extends the Vercel Engineering Style Guide.
 * https://github.com/vercel/style-guide.
 */

module.exports = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    require.resolve("@vercel/style-guide/eslint/react"),
  ],
  parserOptions: { project },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  rules: {
    "react/no-unescaped-entities": "off",
  },
};
