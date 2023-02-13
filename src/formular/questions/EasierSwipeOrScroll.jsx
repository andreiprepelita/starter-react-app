import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let easierSwipeOrScrollValue = 'swipe';

const onChange = (e, { value }, setEasierSwipeOrScroll) => {
    setEasierSwipeOrScroll(value);
    easierSwipeOrScrollValue = value;
};

const EasierSwipeOrScrollContent = () => {
    const [ easierSwipeOrScroll, setEasierSwipeOrScroll ] = useState('swipe');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Which one is easier to navigate through content?</div> */}
        <Radio
            className="scale2"
            label='swipe experience'
            name='radioGroup'
            value='swipe'
            checked={easierSwipeOrScroll === 'swipe'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEasierSwipeOrScroll)
            }}
        />
        <Radio
            className="scale2"
            label='scroll experience'
            name='radioGroup'
            value='scroll'
            checked={easierSwipeOrScroll === 'scroll'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEasierSwipeOrScroll)
            }}
        />
    </div>
    );
};

const EasierSwipeOrScrollAction = ({ count, setCount, setEasierSwipeOrScroll }) => {
    const onClick = () => {
        setCount(count + 1);
        setEasierSwipeOrScroll(easierSwipeOrScrollValue);
        easierSwipeOrScrollValue = 'swipe';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { EasierSwipeOrScrollContent, EasierSwipeOrScrollAction };