import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let genderValue = 'male';

const onChange = (e, { value }, setGender) => {
    setGender(value);
    genderValue = value;
};

const GenderContent = () => {
    const [ gender, setGender ] = useState('male');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">With what gender do you identify?</div> */}
        <Radio
            className="scale2"
            label='Male'
            name='radioGroup'
            value='male'
            checked={gender === 'male'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setGender)
            }}
        />
        <Radio
            className="scale2"
            label='Female'
            name='radioGroup'
            value='female'
            checked={gender === 'female'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setGender)
            }}
        />
        <Radio
            className="scale2"
            label='Other'
            name='radioGroup'
            value='other'
            checked={gender === 'other'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setGender)
            }}
        />
    </div>
    );
};

const GenderAction = ({ count, setCount, setGender }) => {
    const onClick = () => {
        setCount(count + 1);
        setGender(genderValue);
        genderValue = 'male';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { GenderContent, GenderAction };