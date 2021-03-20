import React from 'react';

import Badge from '../components/Badge';

const colorsTailwind = [
    "blue",
    "gray",
    "green",
    "indigo",
    "pink",
    "purple",
    "red",
    "yellow"
  ];
export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colorsTailwind,
      },
    },
  },
};

const Template = ({color, ...args}) => {
const selectedColor = color;
return <Badge color={selectedColor} {...args} />};

export const Primary = Template.bind({});
Primary.args = {
    text: "Badge",
    color: "gray",
    onRemove: () => {}
};

