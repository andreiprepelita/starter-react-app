import React from "react";
import { Button, Dropdown } from 'semantic-ui-react';
import '../../styles/Form.css';

let workIndustryValue;

const onChange = (e, { value }) => {
    workIndustryValue = value;
};

const WorkIndustryContent = ({ errorMessage }) => {
    const options = [
        { key: 'health', text: 'health & care', value: 'health' },
        { key: 'art', text: 'art', value: 'art' },
        { key: 'politics', text: 'politics', value: 'politics' },
        { key: 'sales', text: 'sales', value: 'sales' },
        { key: 'computer&technology', text: 'computer & technology', value: 'computer&technology' },
        { key: 'agriculture', text: 'agriculture', value: 'agriculture' },
        { key: 'aerospace', text: 'aerospace', value: 'aerospace' },
        { key: 'construction', text: 'construction', value: 'construction' },
        { key: 'education', text: 'education', value: 'education' },
        { key: 'energy', text: 'energy', value: 'energy' },
        { key: 'entertainment', text: 'entertainment', value: 'entertainment' },
        { key: 'fashion', text: 'fashion', value: 'fashion' },
        { key: 'finance&economic', text: 'finance & economic', value: 'finance&economic' },
        { key: 'food&beverage', text: 'food & beverage', value: 'food&beverage' },
        { key: 'hospitality', text: 'hospitality', value: 'hospitality' },
        { key: 'manufacturing', text: 'manufacturing', value: 'manufacturing' },
        { key: 'media&news', text: 'media & news', value: 'media&news' },
        { key: 'mining', text: 'mining', value: 'mining' },
        { key: 'pharmaceutical', text: 'pharmaceutical', value: 'pharmaceutical' },
        { key: 'telecomunications', text: 'telecomunications', value: 'telecomunications' },
        { key: 'transportation', text: 'transportation', value: 'transportation'},
        { key: 'advertising&marketing', text: 'advertising & marketing', value: 'advertising&marketing'},
    ];
    return (
    <div className="content flex flex-column items-center justify-around">
        {/* <div className="question">In what industry are you currently working in?</div> */}
        <div className="flex flex-column w-25 h-50">
            <Dropdown
                className="scale2"
                placeholder='industry'
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

const WorkIndustryAction = ({ count, setCount, setWorkIndustry, setErrorMessage }) => {
    const onClick = () => {
        if ( workIndustryValue ) {
            setCount(count + 1);
            setWorkIndustry(workIndustryValue);
            setErrorMessage('');
            workIndustryValue = undefined;
        } else {
            setErrorMessage('Please select an option!');
        }
    };
    return (
        <div className="actions mb5 flex flex-column items-center pl4 pr4">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { WorkIndustryContent, WorkIndustryAction };