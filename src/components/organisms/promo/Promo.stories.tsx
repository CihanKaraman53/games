import { ComponentStory, ComponentMeta } from '@storybook/react';

import Promo from './Promo';

export default {
  title: 'Example/Promo',
  component: Promo,
} as ComponentMeta<typeof Promo>;

const Template: ComponentStory<typeof Promo> = (args) => <Promo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
