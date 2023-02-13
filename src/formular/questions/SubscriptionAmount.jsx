import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let subscriptionAmountValue = '0-5';

const onChange = (e, { value }, setSubscriptionAmount) => {
    setSubscriptionAmount(value);
    subscriptionAmountValue = value;
};

const SubscriptionAmountContent = () => {
    const [ subscriptionAmount, setSubscriptionAmount ] = useState('0-5');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">What's the amount of the money that you would pay for a monthly subscription for an app?</div> */}
        <Radio
            className="scale2"
            label='0-5 ron'
            name='radioGroup'
            value='0-5'
            checked={subscriptionAmount === '0-5'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscriptionAmount)
            }}
        />
        <Radio
            className="scale2"
            label='1-15 ron'
            name='radioGroup'
            value='1-15'
            checked={subscriptionAmount === '1-15'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscriptionAmount)
            }}
        />
        <Radio
            className="scale2"
            label='16-35 ron'
            name='radioGroup'
            value='16-35'
            checked={subscriptionAmount === '16-35'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscriptionAmount)
            }}
        />
        <Radio
            className="scale2"
            label='35-50 ron'
            name='radioGroup'
            value='35-50'
            checked={subscriptionAmount === '35-50'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscriptionAmount)
            }}
        />
        <Radio
            className="scale2"
            label='over 50 ron'
            name='radioGroup'
            value='50+'
            checked={subscriptionAmount === '50+'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscriptionAmount)
            }}
        />
    </div>
    );
};

const SubscriptionAmountAction = ({ count, setCount, setSubscriptionAmount }) => {
    const onClick = () => {
        setCount(count + 1);
        setSubscriptionAmount(subscriptionAmountValue);
        subscriptionAmountValue = '0-5';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { SubscriptionAmountContent, SubscriptionAmountAction };