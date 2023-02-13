import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Reasons = ({ setResults }) => {
    const [ reasons, setReasons ] = useState({
        entertainment: false,
        communication: false,
        reading: false,
        health: false,
        organising: false,
        information: false,
    });

    const reasonsOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/reasons',
            {
                method: 'get',
                params: { reasons: JSON.stringify(reasons) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setReasons({...reasons, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Types of apps</span>
            <Checkbox
                label='entertainment'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'entertainment');
                }}
            />
            <Checkbox
                label='communication'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'communication');
                }}
            />
            <Checkbox
                label='reading'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'reading');
                }}
            />
            <Checkbox
                label='health & care'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'health');
                }}
            />
            <Checkbox
                label='organising'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'organising');
                }}
            />
            <Checkbox
                label='information'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'information');
                }}
            />
            <Button className='w-25' disabled={!reasons.entertainment && !reasons.communication && !reasons.reading && !reasons.health && !reasons.organising && !reasons.information} content="Find" primary onClick={reasonsOnClick} />
        </div>
    );
};

export default Reasons;