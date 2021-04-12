import React from 'react';

import Badge from './Badge';

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
  title: 'Design System/Atoms/Badge',
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

const Template = ({color,...args}) => {
const selectedColor = color;

return <Badge color={selectedColor} {...args} />};

export const Small = Template.bind({});
Small.args = {
    text: "Badge",
    color: "gray",
    isRemovable: true,
    isSmall: true,
    onRemove: () => {}
};

export const Large = Template.bind({});
Large.args = {
    text: "Badge",
    color: "gray",
    isRemovable: true,
    isSmall: false,
    onRemove: () => {}
};