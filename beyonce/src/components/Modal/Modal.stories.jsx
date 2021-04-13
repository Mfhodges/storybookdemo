

import React from 'react';
import Modal from './Modal';

export default {
  title: 'Design System/Templates/Modal',
  component: Modal,
};

const Template = ({...args}) => {
const onAction = () => {console.log("I clicked the modal button!")}
return <Modal handleAction={onAction} {...args} ></Modal>};

export const Primary = Template.bind({});
Primary.args = {
    title: 'My First Modal', 
    description: 'wow I am having so much fun!', 
    buttonText:'Sign up', 
};

// Example of modal over content
{/* <Layout>
<h1>hello world!</h1>
<Modal></Modal>
</Layout> */}

