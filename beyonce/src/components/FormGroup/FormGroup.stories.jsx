import React from 'react';
import Checkbox from '../CheckBox/Checkbox';
import RadioInput from '../RadioInput/RadioInput';
import FormGroup from './FormGroup';

const checkboxItems = [{text:'okay', checkboxID:'test', description:'some description'},
{text:'okay', checkboxID:'test', description:'some description'},
{text:'okay', checkboxID:'test', description:'some description'}];

const radioItems = [{text:'select me', value:'okay', name:'testing', radioID:'test'},
{text:'select me', value:'okay', name:'testing', radioID:'test'},
{text:'select me', value:'okay', name:'testing', radioID:'test'}
];



export default {
  title: 'Design System/Organisms/FormGroup',
  component: FormGroup,
};

const TemplateCheckbox = ({items,...args}) => {
return (<FormGroup {...args}>
    {items.map((item) => (
        <Checkbox {...item}/>
    ))}
</FormGroup>)};

export const Checkboxes = TemplateCheckbox.bind({});
Checkboxes.args = {
    title: "Notifications",
    description: "By Email",
    items:checkboxItems
};

const TemplateRadioInput = ({items,...args}) => {
    return (<FormGroup {...args}>
        {items.map((item) => (
            <RadioInput {...item}/>
        ))}
    </FormGroup>)};

export const RadioInputs = TemplateRadioInput.bind({});
RadioInputs.args = {
    title: "Notifications",
    description: "By Email",
    items:radioItems
};