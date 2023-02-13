import React from "react";
import { Button, Checkbox } from 'semantic-ui-react';
import '../../styles/Form.css';

let activityValue = {
    studying: false,
    working: false,
    retired: false,
    unemployed: false,
}; 

const onChange = (e, { checked }, key) => {
    activityValue[key] = checked;
};

const ActivityContent = ({ errorMessage }) => {
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">What are you doing now?</div> */}
        <div className="flex flex-column items-center justify-around h-75 w-50">
            <Checkbox
                className="scale2"
                label='Studying'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'studying');
                }}
            />
            <Checkbox
                className="scale2"
                label='Working'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'working');
                }}
            />
            <Checkbox
                className="scale2"
                label='Retired'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'retired');
                }}
            />
            <Checkbox
                className="scale2"
                label='Unemployed'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'unemployed');
                }}
            />
            <span className="error mt5 scale2">{errorMessage}</span>
        </div>
    </div>
    );
};

const ActivityAction = ({ count, setCount, setActivity, setErrorMessage }) => {
    const onClick = () => {
        if ( activityValue.retired || activityValue.studying || activityValue.unemployed || activityValue.working ) {
            setCount(count + 1);
            setActivity(activityValue);
            setErrorMessage('');
            activityValue = {
                studying: false,
                working: false,
                retired: false,
                unemployed: false,
            }; 
        } else {
            setErrorMessage('Please select at least one option!');
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { ActivityContent, ActivityAction };