import React from 'react';
import Dropdown from '../components/Dropdown';

const dropdownValues = [
    { value: "dog", name: "Dog" },
    { value: "cat", name: "Cat" },
    { value: "hamster", name: "Hamster" },
    { value: "parrot", name: "Parrot" },
    { value: "spider", name: "Spider" },
    { value: "goldfish", name: "Goldfish" },
  ];

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const Template = ({...args}) => {
return <Dropdown {...args} />};

export const Primary = Template.bind({});
Primary.args = {
    label: "label here",
    values: dropdownValues,
};

