import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let subscriptionValue = 'yes';

const onChange = (e, { value }, setSubscription) => {
    setSubscription(value);
    subscriptionValue = value;
};

const SubscriptionContent = () => {
    const [ subscription, setSubscription ] = useState('yes');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Would you pay a monthly subscription for an app?</div> */}
        <Radio
            className="scale2"
            label='yes'
            name='radioGroup'
            value='yes'
            checked={subscription === 'yes'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscription)
            }}
        />
        <Radio
            className="scale2"
            label='no'
            name='radioGroup'
            value='no'
            checked={subscription === 'no'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setSubscription)
            }}
        />
    </div>
    );
};

const SubscriptionAction = ({ count, setCount, setSubscription }) => {
    const onClick = () => {
        setCount(count + 1);
        setSubscription(subscriptionValue);
        subscriptionValue = 'yes';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { SubscriptionContent, SubscriptionAction };