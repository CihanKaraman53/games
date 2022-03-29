import { ComponentStory, ComponentMeta } from '@storybook/react';

import Polygon from './Polygon';

export default {
  title: 'Example/Polygon',
  component: Polygon,
} as ComponentMeta<typeof Polygon>;

const Template: ComponentStory<typeof Polygon> = (args) => <Polygon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'A'
};
