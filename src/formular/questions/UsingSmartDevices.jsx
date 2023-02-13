import React from "react";
import { Button, Dropdown } from 'semantic-ui-react';

let usingSmartDevicesValue;

const onChange = (e, { value }) => {
    usingSmartDevicesValue = value;
};

const UsingSmartDevicesContent = ({ errorMessage }) => {
    const options = [
        { key: '1', text: '1', value: 1},
        { key: '2', text: '2', value: 2},
        { key: '3', text: '3', value: 3},
        { key: '4', text: '4', value: 4},
        { key: '5', text: '5', value: 5},
        { key: '6', text: '6', value: 6},
        { key: '7', text: '7', value: 7},
        { key: '8', text: '8', value: 8},
        { key: '9', text: '9', value: 9},
        { key: '10', text: '10', value: 10},
        { key: '11', text: '11', value: 11},
        { key: '12', text: '12', value: 12},
        { key: '13', text: '13', value: 13},
        { key: '14', text: '14', value: 14},
        { key: '15', text: '15', value: 15},
        { key: '16', text: '16', value: 16},
    ];
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">For how many years have you been using smart devices?</div> */}
        <div className="flex flex-column w-25 h-50">
            <Dropdown
                className="scale2"
                placeholder='Years'
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

const UsingSmartDevicesAction = ({ count, setCount, setUsingSmartDevices, setErrorMessage }) => {
    const onClick = () => {
        if ( usingSmartDevicesValue ) {
            setCount(count + 1);
            setUsingSmartDevices(usingSmartDevicesValue);
            setErrorMessage('');
            usingSmartDevicesValue = undefined;
        } else {
            setErrorMessage("Please select an option!");
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { UsingSmartDevicesContent, UsingSmartDevicesAction };