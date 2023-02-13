import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const MonetizationLevel = ({ setResults }) => {
    const [ monetizationLevel, setMonetizationLevel ] = useState({
        '0-5': false,
        '1-15': false,
        '16-35': false,
        '35-50': false,
        '50+': false,
    });

    const monetizationLevelOnClick = async () => {
        const response = await axios(
            'https://hci-assistant-api.cyclic.app/find/monetizationLevel',
            {
                method: 'get',
                params: { monetizationLevel: JSON.stringify(monetizationLevel) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setMonetizationLevel({...monetizationLevel, [key]: checked});
    };

    return (
        <div className='filter flex flex-column pb4'>
            <span>Monetization level</span>
            <Checkbox
                label='0-5 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '0-5');
                }}
            />
            <Checkbox
                label='1-15 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '1-15');
                }}
            />
            <Checkbox
                label='16-35 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '16-35');
                }}
            />
            <Checkbox
                label='35-50 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '35-50');
                }}
            />
            <Checkbox
                label='50+ ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '50+');
                }}
            />
            <Button
                className='w-25'
                disabled={!monetizationLevel['0-5'] &&
                    !monetizationLevel['1-15'] &&
                    !monetizationLevel['16-35'] &&
                    !monetizationLevel['50+'] && 
                    !monetizationLevel['35-50']}
                content="Find"
                primary
                onClick={monetizationLevelOnClick}
            />
        </div>
    );
};

export default MonetizationLevel;