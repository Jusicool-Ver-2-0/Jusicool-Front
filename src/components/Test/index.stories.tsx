import Test from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Test> = {
  title: 'Test',
  component: Test,
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Primary: Story = {};
