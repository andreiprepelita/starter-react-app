import React from "react";
import { Button, Checkbox } from 'semantic-ui-react';

let reasonsValue = {
    entertainment: false,
    communication: false,
    reading: false,
    health: false,
    organising: false,
    information: false,
};

const onChange = (e, { checked }, key) => {
    reasonsValue[key] = checked;
};

const ReasonsContent = ({ errorMessage }) => {
    return (
        <div className="content flex flex-column items-center justify-around pl4 pr4">
            {/* <div className="question">Which of the following are the reasons why you use mostly smart devices?</div> */}
            <div className="flex flex-column items-center justify-around h-75 w-50">
                <Checkbox
                    className="scale2"
                    label='entertainment'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'entertainment');
                    }}
                />
                <Checkbox
                    className="scale2"
                    label='communication'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'communication');
                    }}
                />
                <Checkbox
                    className="scale2"
                    label='reading'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'reading');
                    }}
                />
                <Checkbox
                    className="scale2"
                    label='health & care'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'health');
                    }}
                />
                <Checkbox
                    className="scale2"
                    label='organising'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'organising');
                    }}
                />
                <Checkbox
                    className="scale2"
                    label='information'
                    onChange={(e, { checked }) => {
                        onChange(e, { checked }, 'information');
                    }}
                />
                <span className="error mt5 mb3 scale2">{errorMessage}</span>
            </div>
        </div>
        );
};

const ReasonsAction = ({ count, setCount, setReasons, setErrorMessage }) => {
    const onClick = () => {
        if ( reasonsValue.communication || reasonsValue.entertainment || reasonsValue.health || reasonsValue.information || reasonsValue.organising || reasonsValue.reading ) {
            setCount(count + 1);
            setReasons(reasonsValue);
            setErrorMessage('');
            reasonsValue = {
                entertainment: false,
                communication: false,
                reading: false,
                health: false,
                organising: false,
                information: false,
            };
        } else {
            setErrorMessage('Please select at least one option!');
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { ReasonsContent, ReasonsAction };