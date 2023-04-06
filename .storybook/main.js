/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../blocks/**/*.stories.js",
    "../blocks/**/*.stories.jsx",
    "../blocks/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@dylandepass/franklin-storybook-addon",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  staticDirs: [
    { from: "../scripts", to: "/scripts" },
    { from: "../styles", to: "/styles" },
    { from: "../icons", to: "/icons" }
  ],
  docs: {
    autodocs: "tag",
  },
};
export default config;
