import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const OwnedDevices = ({ setResults }) => {
    const [ ownedDevices, setOwnedDevices ] = useState({ smartphone: false, tablet: false, smartwatch: false, smartband: false });

    const ownedDevicesOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/ownedDevices',
            {
                method: 'get',
                params: { ownedDevices: JSON.stringify(ownedDevices) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setOwnedDevices({...ownedDevices, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Devices</span>
            <Checkbox
                label='smartphone'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'smartphone');
                }}
            />
            <Checkbox
                label='tablet'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'tablet');
                }}
            />
            <Checkbox
                label='smartwatch'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'smartwatch');
                }}
            />
            <Checkbox
                label='smartband'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'smartband');
                }}
            />
            <Button className='w-25' disabled={!ownedDevices.smartphone && !ownedDevices.tablet && !ownedDevices.smartwatch && !ownedDevices.smartband} content="Find" primary onClick={ownedDevicesOnClick} />
        </div>
    );
};

export default OwnedDevices;