/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

module.exports = {
  "stories": [
    "../blocks/**/*.stories.js",
    "../blocks/**/*.stories.jsx",
    "../blocks/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@dylandepass/franklin-storybook-addon"
  ],
  "framework": "@storybook/html",
  "staticDirs": [
    { from: "../scripts", to: "/scripts" },
    { from: "../styles", to: "/styles" },
    { from: "../icons", to: "/icons" }
  ],
};
