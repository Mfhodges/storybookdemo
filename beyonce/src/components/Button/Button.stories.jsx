import React from 'react';
import Button from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

const Template = ({...args}) => {
return <Button {...args} />};

export const Primary = Template.bind({});
Primary.args = {
    text: "Daily Notifications",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    text: "Daily Notifications",
    isFullWidth:true,
};