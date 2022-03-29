import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortButton from './SortButton';

export default {
  title: 'Example/SortButton',
  component: SortButton,
} as ComponentMeta<typeof SortButton>;

const Template: ComponentStory<typeof SortButton> = (args) => <SortButton  {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
