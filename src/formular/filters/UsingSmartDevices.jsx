import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const UsingSmartDevices = ({ setResults }) => {
    const [ usingSmartDevicesMin, setUsingSmartDevicesMin ] = useState();
    const [ usingSmartDevicesMax, setUsingSmartDevicesMax ] = useState();
    const [ experienceError, setExperienceError ] = useState();

    const usingSmartDevicesageMinHandler = (e) => {
        setUsingSmartDevicesMin(Number(e.target.value));
    };

    const usingSmartDevicesMaxHandler = (e) => {
        setUsingSmartDevicesMax(Number(e.target.value));
    };

    const usingSmartDevicesOnClick = async () => {
        if (usingSmartDevicesMax && usingSmartDevicesMin) {
            if (usingSmartDevicesMax < usingSmartDevicesMin || usingSmartDevicesMin < 0 || usingSmartDevicesMax < 0) {
                setExperienceError('Values must be greater than 0. Max value must be greater or equal to min value.');
            } else {
                setExperienceError('');
                const response = await axios(
                    'https://formular-api.cyclic.app/find/usingSmartDevices',
                    {
                        method: 'get',
                        params: { usingSmartDevicesMin: usingSmartDevicesMin, usingSmartDevicesMax: usingSmartDevicesMax },
                    },
                );
                setResults(await response.data)
            }
        } else {
            setExperienceError('Both fields must be filled.');
        }
    };

    return (
        <div className='filter flex flex-column'>
            <span>Experience with smart devices:</span>
            <div className='ageMin'>
                <span>min:</span>
                <Input type='number' onChange={usingSmartDevicesageMinHandler} />
            </div>
            <div className='ageMax'>
                <span>max:</span>
                <Input type='number' onChange={usingSmartDevicesMaxHandler} />
            </div>
            <div className='error'>{experienceError}</div>
            <Button className='w-25' content="Find" primary onClick={usingSmartDevicesOnClick} />
        </div>
    );
};

export default UsingSmartDevices;