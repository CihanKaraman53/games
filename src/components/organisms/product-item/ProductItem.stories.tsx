import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductItem from './ProductItem';

export default {
  title: 'Example/ProductItem',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
