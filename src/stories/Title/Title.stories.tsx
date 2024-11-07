import type { Meta, StoryObj } from '@storybook/react'
import { css } from '../../../styled-system/css'

import { Title } from './index'

const meta = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'My Title with PandaCSS 🐼'
  }
}
