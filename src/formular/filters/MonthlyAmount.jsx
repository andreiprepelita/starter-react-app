import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const MonthlyAmount = ({ setResults }) => {
    const [ monthlyAmount, setMonthlyAmount ] = useState({
        '0-500': false,
        '501-1700': false,
        '1701-2500': false,
        '2501+': false,
    });

    const monthlyAmountOnClick = async () => {
        const response = await axios(
            'https://hci-assistant-api.cyclic.app/find/monthlyAmount',
            {
                method: 'get',
                params: { monthlyAmount: JSON.stringify(monthlyAmount) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setMonthlyAmount({...monthlyAmount, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Salary levels(NET)</span>
            <Checkbox
                label='0-500 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '0-500');
                }}
            />
            <Checkbox
                label='501-1700 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '501-1700');
                }}
            />
            <Checkbox
                label='1701-2500 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '1701-2500');
                }}
            />
            <Checkbox
                label='over 2501 ron'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, '2501+');
                }}
            />
            <Button
                className='w-25'
                disabled={!monthlyAmount['0-500'] &&
                    !monthlyAmount['1701-2500'] &&
                    !monthlyAmount['501-1700'] &&
                    !monthlyAmount['2501+']}
                content="Find"
                primary
                onClick={monthlyAmountOnClick}
            />
        </div>
    );
};

export default MonthlyAmount;