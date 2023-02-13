import React from "react";
import { Button, Dropdown } from 'semantic-ui-react';

let navigateValue;

const onChange = (e, { value }) => {
    navigateValue = value;
};

const NavigateContent = ({ errorMessage }) => {
    const options = [
        { key: '1', text: '1', value: 1 },
        { key: '2', text: '2', value: 2 },
        { key: '3', text: '3', value: 3 },
        { key: '4', text: '4', value: 4 },
        { key: '5', text: '5', value: 5 },
    ];
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Would you like to navigate throughout a feed this way? 1-not really, 5-really liked it</div> */}
        <div className="flex flex-column w-25">
            <Dropdown
                className="scale2"
                placeholder='navigate'
                fluid
                selection
                options={options}
                onChange={onChange}
            />
            <span className="error mt5 scale2">{errorMessage}</span>
        </div>
    </div>
    );
};

const NavigateAction = ({ count, setCount, setNavigate, setErrorMessage }) => {
    const onClick = () => {
        if ( navigateValue ) {
            setCount(count + 1);
            setNavigate(navigateValue);
            setErrorMessage('');
            navigateValue = undefined;
        } else {
            setErrorMessage('Please select an option!');
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { NavigateContent, NavigateAction };