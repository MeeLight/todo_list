import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  // Required
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: [
    './../src/stories/**/stories.tsx',
    './../src/stories/**/*.stories.@(ts|tsx)'
  ],
  // Optional
  addons: ['@storybook/addon-essentials', '@storybook/addon-themes'],
  staticDirs: ['./../public'],
  docs: {
    autodocs: 'tag'
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}

export default config
