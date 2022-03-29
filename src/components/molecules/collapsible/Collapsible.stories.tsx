import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapsible from './Collapsible';

export default {
  title: 'Example/Collapsible',
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template: ComponentStory<typeof Collapsible> = (args) => (<Collapsible  {...args} isActive>
    <p>
      This is the collapsible content. It can be any element or React
      component you like.
    </p>
    <p>
      It can even be another Collapsible component. Check out the next
      section!
    </p><p>
      This is the collapsible content. It can be any element or React
      component you like.
    </p>
    <p>
      It can even be another Collapsible component. Check out the next
      section!
    </p>
  </Collapsible>
)

export const Primary = Template.bind({});
Primary.args = {
};
