import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let easierDoubleTapOrPinchSpreadValue = 'doubleTap';

const onChange = (e, { value }, setEasierSwipeOrScroll) => {
    setEasierSwipeOrScroll(value);
    easierDoubleTapOrPinchSpreadValue = value;
};

const EasierDoubleTapOrPinchSpreadContent = () => {
    const [ easierDoubleTapOrPinchSpread, setEasierDoubleTapOrPinchSpread ] = useState('doubleTap');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Which one is easier to use for zooming?</div> */}
        <Radio
            className="scale2"
            label='double tap'
            name='radioGroup'
            value='doubleTap'
            checked={easierDoubleTapOrPinchSpread === 'doubleTap'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEasierDoubleTapOrPinchSpread)
            }}
        />
        <Radio
            className="scale2"
            label='pinch & spread'
            name='radioGroup'
            value='pinch&spread'
            checked={easierDoubleTapOrPinchSpread === 'pinch&spread'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEasierDoubleTapOrPinchSpread)
            }}
        />
    </div>
    );
};

const EasierDoubleTapOrPinchSpreadAction = ({ count, setCount, setEasierDoubleTapOrPinchSpread }) => {
    const onClick = () => {
        setCount(count + 1);
        setEasierDoubleTapOrPinchSpread(easierDoubleTapOrPinchSpreadValue);
        easierDoubleTapOrPinchSpreadValue = 'doubleTap';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { EasierDoubleTapOrPinchSpreadContent, EasierDoubleTapOrPinchSpreadAction };