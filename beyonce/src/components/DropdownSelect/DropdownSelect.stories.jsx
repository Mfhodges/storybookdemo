import React from 'react';
import DropdownSelect from './DropdownSelect';

const dropdownValues = [
    { value: "dog", name: "Dog" },
    { value: "cat", name: "Cat" },
    { value: "hamster", name: "Hamster" },
    { value: "parrot", name: "Parrot" },
    { value: "spider", name: "Spider" },
    { value: "goldfish", name: "Goldfish" },
  ];

export default {
  title: 'Design System/Molecules/DropdownSelect',
  component: DropdownSelect,
};

const Template = ({...args}) => {
return <DropdownSelect {...args} />};

export const Primary = Template.bind({});
Primary.args = {
    label: "label here",
    values: dropdownValues,
    placeholder: "select an animal"
};