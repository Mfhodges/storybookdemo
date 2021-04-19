


import React from 'react';
import ThumbUp from './ThumbUp';

export default {
  title: 'Design System/Molecules/ThumbUp',
  component: ThumbUp,
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
return <ThumbUp {...args} />};



export const Primary = Template.bind({});
Primary.args = {
    isSmall:true,
    isSelected:false,
};