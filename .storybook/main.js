const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.js', '../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-jest'],
  presets: [path.resolve(__dirname, './next-preset.js')]
};



