import React from 'react';
import RadioInput from './RadioInput';

/**
 * NOTE: for radio inputs, the user must select one. 
 * So if one is only presented, it cannot be unselected
 */

export default {
  title: 'Design System/Molecules/RadioInput',
  component: RadioInput,
};

const Template = ({...args}) => {
return <RadioInput {...args} />};



export const Primary = Template.bind({});
Primary.args = {
    text: "Daily Notifications",
    value: "daily",
    name: "test",
    radioID: "test"
};