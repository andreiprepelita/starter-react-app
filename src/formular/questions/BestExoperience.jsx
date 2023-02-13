import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let bestExperienceValue = 'phone';

const onChange = (e, { value }, setBestExperience) => {
    setBestExperience(value);
    bestExperienceValue = value;
};

const BestExperienceContent = () => {
    const [ bestExperience, setBestExperience ] = useState('phone');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">On which device did you have the best experience?</div> */}
        <Radio
            className="scale2"
            label='phone size'
            name='radioGroup'
            value='phone'
            checked={bestExperience === 'phone'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setBestExperience)
            }}
        />
        <Radio
            className="scale2"
            label='tablet size'
            name='radioGroup'
            value='tablet'
            checked={bestExperience === 'tablet'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setBestExperience)
            }}
        />
    </div>
    );
};

const BestExperienceAction = ({ count, setCount, setBestExperience }) => {
    const onClick = () => {
        setCount(count + 1);
        setBestExperience(bestExperienceValue);
        bestExperienceValue = 'phone';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { BestExperienceContent, BestExperienceAction };