import React from 'react';
import DirectionsHeader from './DirectionsHeader';


export default {
  title: 'Design System/Organisms/DirectionsHeader',
  component: DirectionsHeader,
};

const Template = ({...args}) => {
return <DirectionsHeader {...args} />};

export const Primary = Template.bind({});
Primary.args = {
    isFinal: false,
};