import React from 'react';
import ConfettiBG from './ConfettiBG';
import Modal from './Modal';

export default {
  title: 'Design System/Atoms/Confetti',
  component: ConfettiBG,
};

const Template = ({...args}) => {

return(
<ConfettiBG {...args} ></ConfettiBG>)};

export const Primary = Template.bind({});
Primary.args = {
    recycle:false,
    numberOfPieces:1200,
    tweenDuration:50000,
};