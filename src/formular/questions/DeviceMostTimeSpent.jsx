import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';
import '../../styles/Form.css';

let deviceMostTimeSpentValue = {
    smartphone: 1,
    tablet: 1,
    smartwatch: 1,
    smartband: 1,
};

const onChange = (e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, key) => {
    setDeviceMostTimeSpent({...deviceMostTimeSpent, [key]: value});
    deviceMostTimeSpentValue[key] = value;
};

const DeviceMostTimeSpentContent = ({ errorMessage }) => {
    const [ deviceMostTimeSpent, setDeviceMostTimeSpent ] = useState({
        smartphone: 1,
        tablet: 1,
        smartwatch: 1,
        smartband: 1,
    });
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Note from 1 to 4 (with 1 the most important and 4 the least important) with which smart device you spend most of your time</div> */}
        <div className="w-50 flex justify-between scale18">
            <div className="w-70">Smartphone:</div>
            <Radio
                className='ml2'
                label='1'
                name='radioGroupSmartphone'
                value={1}
                checked={deviceMostTimeSpent.smartphone === 1}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartphone')
                }}
            />
            <Radio
                className='ml4'
                label='2'
                name='radioGroupSmartphone'
                value={2}
                checked={deviceMostTimeSpent.smartphone === 2}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartphone')
                }}
            />
            <Radio
                className='ml4'
                label='3'
                name='radioGroupSmartphone'
                value={3}
                checked={deviceMostTimeSpent.smartphone === 3}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartphone')
                }}
            />
            <Radio
                className='ml4'
                label='4'
                name='radioGroupSmartphone'
                value={4}
                checked={deviceMostTimeSpent.smartphone === 4}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartphone')
                }}
            />
        </div>
        <div className="w-50 flex justify-between scale18">
            <div className="w-70">Tablet:</div>
            <Radio
                className='ml2'
                label='1'
                name='radioGroupTablet'
                value={1}
                checked={deviceMostTimeSpent.tablet === 1}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'tablet')
                }}
            />
            <Radio
                className='ml4'
                label='2'
                name='radioGroupTablet'
                value={2}
                checked={deviceMostTimeSpent.tablet === 2}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'tablet')
                }}
            />
            <Radio
                className='ml4'
                label='3'
                name='radioGroupTablet'
                value={3}
                checked={deviceMostTimeSpent.tablet === 3}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'tablet')
                }}
            />
            <Radio
                className='ml4'
                label='4'
                name='radioGroupTablet'
                value={4}
                checked={deviceMostTimeSpent.tablet === 4}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'tablet')
                }}
            />
        </div>
        <div className="w-50 flex justify-between scale18">
            <div className="w-70">Smartwatch:</div>
            <Radio
                className='ml2'
                label='1'
                name='radioGroupSmartwatch'
                value={1}
                checked={deviceMostTimeSpent.smartwatch === 1}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartwatch')
                }}
            />
            <Radio
                className='ml4'
                label='2'
                name='radioGroupSmartwatch'
                value={2}
                checked={deviceMostTimeSpent.smartwatch === 2}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartwatch')
                }}
            />
            <Radio
                className='ml4'
                label='3'
                name='radioGroupSmartwatch'
                value={3}
                checked={deviceMostTimeSpent.smartwatch === 3}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartwatch')
                }}
            />
            <Radio
                className='ml4'
                label='4'
                name='radioGroupSmartwatch'
                value={4}
                checked={deviceMostTimeSpent.smartwatch === 4}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartwatch')
                }}
            />
        </div>
        <div className="w-50 flex justify-between scale18">
            <div className="w-70">Smartband:</div>
            <Radio
                className='ml2'
                label='1'
                name='radioGroupSmartband'
                value={1}
                checked={deviceMostTimeSpent.smartband === 1}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartband')
                }}
            />
            <Radio
                className='ml4'
                label='2'
                name='radioGroupSmartband'
                value={2}
                checked={deviceMostTimeSpent.smartband === 2}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartband')
                }}
            />
            <Radio
                className='ml4'
                label='3'
                name='radioGroupSmartband'
                value={3}
                checked={deviceMostTimeSpent.smartband === 3}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartband')
                }}
            />
            <Radio
                className='ml4'
                label='4'
                name='radioGroupSmartband'
                value={4}
                checked={deviceMostTimeSpent.smartband === 4}
                onChange={(e, { value }) => {
                    onChange(e, { value }, deviceMostTimeSpent, setDeviceMostTimeSpent, 'smartband')
                }}
            />
        </div>
        <span className="error mt2 scale2 w-50">{errorMessage}</span>
    </div>
    );
};

const DeviceMostTimeSpentAction = ({ count, setCount, setDeviceMostTimeSpent, setErrorMessage }) => {
    const onClick = () => {
        // console.log((new Set(Object.values(deviceMostTimeSpentValue))).size);
        if ( (new Set(Object.values(deviceMostTimeSpentValue))).size === 4) {
            setCount(count + 1);
            setDeviceMostTimeSpent(deviceMostTimeSpentValue);
            deviceMostTimeSpentValue = {
                smartphone: 1,
                tablet: 1,
                smartwatch: 1,
                smartband: 1,
            };
            setErrorMessage('');
        } else {
            setErrorMessage('Please select distinct values for each device!')
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { DeviceMostTimeSpentContent, DeviceMostTimeSpentAction };