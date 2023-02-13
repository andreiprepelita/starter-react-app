import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Monetization = ({ setResults }) => {
    const [ monetization, setMonetization ] = useState({
        yes: false,
        no: false,
    });

    const monetizationOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/monetization',
            {
                method: 'get',
                params: { monetization: JSON.stringify(monetization) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setMonetization({...monetization, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Monetization</span>
            <Checkbox
                label='yes'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'yes');
                }}
            />
            <Checkbox
                label='no'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'no');
                }}
            />
            <Button
                className='w-25'
                disabled={!monetization.yes &&
                    !monetization.no}
                content="Find"
                primary
                onClick={monetizationOnClick}
            />
        </div>
    );
};

export default Monetization;