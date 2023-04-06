/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    host: 'https://main--franklin-website--drew-shumski.hlx.page',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
