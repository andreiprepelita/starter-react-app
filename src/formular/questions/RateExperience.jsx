import React from "react";
import { Button, Dropdown } from 'semantic-ui-react';

let rateExperienceValue;

const onChange = (e, { value }) => {
    rateExperienceValue = value;
};

const RateExperienceContent = ({ errorMessage }) => {
    const options = [
        { key: '1', text: '1', value: 1 },
        { key: '2', text: '2', value: 2 },
        { key: '3', text: '3', value: 3 },
        { key: '4', text: '4', value: 4 },
        { key: '5', text: '5', value: 5 },
    ];
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">How would you rate the experience? 1-not satisfying, 5-really satisfying</div> */}
        <div className="flex flex-column">
            <Dropdown
                className="scale2"
                placeholder='rate experience'
                fluid
                selection
                options={options}
                onChange={onChange}
            />
            <span className="error mt5 scale2">{errorMessage}</span>
        </div>
    </div>
    );
};

const RateExperienceAction = ({ count, setCount, setRateExperience, setErrorMessage }) => {
    const onClick = () => {
        if ( rateExperienceValue ) {
            setCount(count + 1);
            setRateExperience(rateExperienceValue);
            setErrorMessage('');
            rateExperienceValue = undefined;
        } else {
            setErrorMessage('Please select an option!');
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { RateExperienceContent, RateExperienceAction };