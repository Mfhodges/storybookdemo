import React from 'react';
import Layout from './Layout';

export default {
  title: 'Design System/Templates/Layout',
  component: Layout,
};

const Template = ({...args}) => {
return <Layout {...args} ><p>Content goes here...</p></Layout>};

export const Primary = Template.bind({});
Primary.args = {
    
};