import React from 'react';
import Button from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

const Template = ({text, ...args}) => {
return <Button {...args} >{text}</Button>};

export const Primary = Template.bind({});
Primary.args = {
    text: "Daily Notifications",
    isFullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    text: "Daily Notifications",
    isFullWidth: true,
};