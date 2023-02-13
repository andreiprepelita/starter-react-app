import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let likeSwipeOrScrollValue = 'swipe';

const onChange = (e, { value }, setLikeSwipeOrScroll) => {
    setLikeSwipeOrScroll(value);
    likeSwipeOrScrollValue = value;
};

const LikeSwipeOrScrollContent = () => {
    const [ likeSwipeOrScroll, setLikeSwipeOrScroll ] = useState('swipe');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Which one did you like the most?</div> */}
        <Radio
            className="scale2"
            label='swipe experience'
            name='radioGroup'
            value='swipe'
            checked={likeSwipeOrScroll === 'swipe'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setLikeSwipeOrScroll)
            }}
        />
        <Radio
            className="scale2"
            label='scroll experience'
            name='radioGroup'
            value='scroll'
            checked={likeSwipeOrScroll === 'scroll'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setLikeSwipeOrScroll)
            }}
        />
    </div>
    );
};

const LikeSwipeOrScrollAction = ({ count, setCount, setLikeSwipeOrScroll }) => {
    const onClick = () => {
        setCount(count + 1);
        setLikeSwipeOrScroll(likeSwipeOrScrollValue);
        likeSwipeOrScrollValue = 'swipe';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { LikeSwipeOrScrollContent, LikeSwipeOrScrollAction };