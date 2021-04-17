import React from 'react';
import LoadingPage from './LoadingPage';


export default {
  title: 'Design System/Templates/LoadingPage',
  component: LoadingPage,
};

const Template = ({...args}) => {

return(
<LoadingPage {...args} ></LoadingPage>)};

export const Primary = Template.bind({});
Primary.args = {
};