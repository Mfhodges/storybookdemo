


import React from 'react';
import ThumbDown from './ThumbDown';

export default {
  title: 'Design System/Molecules/ThumbDown',
  component: ThumbDown,
  argTypes:{
    // foo is the property we want to remove from the UI
    isSelected:{
      table:{
        disable:true
      }
    }
  }
};

const Template = ({...args}) => {
return <ThumbDown {...args} />};



export const Primary = Template.bind({});
Primary.args = {
    isSmall:true,
    isSelected:false,
};