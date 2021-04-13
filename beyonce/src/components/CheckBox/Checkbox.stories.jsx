import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Design System/Molecules/Checkbox',
  component: Checkbox,
};

const Template = ({...args}) => {
return <Checkbox {...args} />};

export const Primary = Template.bind({});
Primary.args = {
    text: "Daily Notifications",
    description: "We'll notify you by email every day",
    checkboxID: "dailyNotification"
};