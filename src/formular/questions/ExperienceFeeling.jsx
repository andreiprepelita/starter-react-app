import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let experienceFeelingValue = 'interested';

const onChange = (e, { value }, setExperienceFeeling) => {
    setExperienceFeeling(value);
    experienceFeelingValue = value;
};

const ExperienceFeelingContent = () => {
    const [ experienceFeeling, setExperienceFeeling ] = useState('interested');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">How did this experience make you feel?</div> */}
        <Radio
            className="scale2"
            label='interested'
            name='radioGroup'
            value='interested'
            checked={experienceFeeling === 'interested'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setExperienceFeeling)
            }}
        />
        <Radio
            className="scale2"
            label='happy'
            name='radioGroup'
            value='happy'
            checked={experienceFeeling === 'happy'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setExperienceFeeling)
            }}
        />
        <Radio
            className="scale2"
            label='intrigued'
            name='radioGroup'
            value='intrigued'
            checked={experienceFeeling === 'intrigued'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setExperienceFeeling)
            }}
        />
        <Radio
            className="scale2"
            label='frustrated'
            name='radioGroup'
            value='frustrated'
            checked={experienceFeeling === 'frustrated'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setExperienceFeeling)
            }}
        />
        <Radio
            className="scale2"
            label='enjoyed'
            name='radioGroup'
            value='enjoyed'
            checked={experienceFeeling === 'enjoyed'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setExperienceFeeling)
            }}
        />
    </div>
    );
};

const ExperienceFeelingAction = ({ count, setCount, setExperienceFeeling }) => {
    const onClick = () => {
        setCount(count + 1);
        setExperienceFeeling(experienceFeelingValue);
        experienceFeelingValue = 'interested';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { ExperienceFeelingContent, ExperienceFeelingAction };