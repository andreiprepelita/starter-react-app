import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let monthlyAmountValue = '0-500';

const onChange = (e, { value }, setMonthlyAmount) => {
    setMonthlyAmount(value);
    monthlyAmountValue = value;
};

const MonthlyAmountContent = () => {
    const [ monthlyAmount, setMonthlyAmount ] = useState('0-500');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Which is the amount of money you get monthly (NET)?</div> */}
        <Radio
            className="scale2"
            label='0-500 ron'
            name='radioGroup'
            value='0-500'
            checked={monthlyAmount === '0-500'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setMonthlyAmount)
            }}
        />
        <Radio
            className="scale2"
            label='501-1700 ron'
            name='radioGroup'
            value='501-1700'
            checked={monthlyAmount === '501-1700'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setMonthlyAmount)
            }}
        />
        <Radio
            className="scale2"
            label='1701-2500 ron'
            name='radioGroup'
            value='1701-2500'
            checked={monthlyAmount === '1701-2500'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setMonthlyAmount)
            }}
        />
        <Radio
            className="scale2"
            label='over 2501 ron'
            name='radioGroup'
            value='2501+'
            checked={monthlyAmount === '2501+'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setMonthlyAmount)
            }}
        />
    </div>
    );
};

const MonthlyAmountAction = ({ count, setCount, setMonthlyAmount }) => {
    const onClick = () => {
        setCount(count + 1);
        setMonthlyAmount(monthlyAmountValue);
        monthlyAmountValue = '0-500';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { MonthlyAmountContent, MonthlyAmountAction };