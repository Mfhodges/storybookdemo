

import React from 'react';
import SuccessModal from './SuccessModal';

export default {
  title: 'Design System/Templates/SuccessModal',
  component: SuccessModal,
};

const Template = ({description,...args}) => {
const onAction = () => {console.log("I clicked the modal button!")}
return <SuccessModal handleAction={onAction} {...args} >{description}</SuccessModal>};

export const Primary = Template.bind({});
Primary.args = {
    title: 'My First Modal', 
    description: 'wow I am having so much fun!', 
    buttonText:'Sign up', 
};