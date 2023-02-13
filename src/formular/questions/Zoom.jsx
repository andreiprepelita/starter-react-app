import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let zoomValue = 'doubleTap';

const onChange = (e, { value }, setZoom) => {
    setZoom(value);
    zoomValue = value;
};

const ZoomContent = () => {
    const [ zoom, setZoom ] = useState('doubleTap');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Which one do you prefer?</div> */}
        <Radio
            className="scale2"
            label='double tap'
            name='radioGroup'
            value='doubleTap'
            checked={zoom === 'doubleTap'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setZoom)
            }}
        />
        <Radio
            className="scale2"
            label='pinch & spread'
            name='radioGroup'
            value='pinch&spread'
            checked={zoom === 'pinch&spread'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setZoom)
            }}
        />
    </div>
    );
};

const ZoomAction = ({ count, setCount, setZoom }) => {
    const onClick = () => {
        setCount(count + 1);
        setZoom(zoomValue);
        zoomValue = 'doubleTap';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { ZoomContent, ZoomAction };