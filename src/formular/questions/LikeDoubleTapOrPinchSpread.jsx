import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let likeDoubleTapOrPinchSpreadValue = 'doubleTap';

const onChange = (e, { value }, setLikeDoubleTapOrPinchSpread) => {
    setLikeDoubleTapOrPinchSpread(value);
    likeDoubleTapOrPinchSpreadValue = value;
};

const LikeDoubleTapOrPinchSpreadContent = () => {
    const [ likeDoubleTapOrPinchSpread, setLikeDoubleTapOrPinchSpread ] = useState('doubleTap');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Which one did you like the most?</div> */}
        <Radio
            className="scale2"
            label='double tap'
            name='radioGroup'
            value='doubleTap'
            checked={likeDoubleTapOrPinchSpread === 'doubleTap'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setLikeDoubleTapOrPinchSpread)
            }}
        />
        <Radio
            className="scale2"
            label='pinch & spread'
            name='radioGroup'
            value='pinch&spread'
            checked={likeDoubleTapOrPinchSpread === 'pinch&spread'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setLikeDoubleTapOrPinchSpread)
            }}
        />
    </div>
    );
};

const LikeDoubleTapOrPinchSpreadAction = ({ count, setCount, setLikeDoubleTapOrPinchSpread }) => {
    const onClick = () => {
        setCount(count + 1);
        setLikeDoubleTapOrPinchSpread(likeDoubleTapOrPinchSpreadValue);
        likeDoubleTapOrPinchSpreadValue = 'doubleTap';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { LikeDoubleTapOrPinchSpreadContent, LikeDoubleTapOrPinchSpreadAction };