import React, { useState, useEffect } from "react";
import { Button, Dropdown } from 'semantic-ui-react';

let countryValue = 'RO';

const onChange = (value, setCountry) => {
    setCountry(value);
    countryValue = value;
};

const CountryContent = () => {
    const [ countries, setCountries] = useState([]);
    const [ country, setCountry ] = useState('RO');

    const getJSON = async url => {
        const response = await fetch(url);
        if(!response.ok)
            throw new Error(response.statusText);
        
        const data = response.json();
        return data;
    }

    useEffect(() => {
        getJSON("https://trial.mobiscroll.com/content/countries.json").then(data => {
            setCountries(data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">How much time do you spend daily on a smartphone/tablet?</div> */}
        <div className="flex flex-column w-50 h-50">
            <Dropdown
                value={country}
                className="scale15"
                options={countries}
                placeholder="country..."
                fluid
                selection
                onChange={(e, { value }) => {
                    onChange(value, setCountry);
                }}
            />
        </div>
    </div>
    );
};

const CountryAction = ({ count, setCount, setCountry }) => {
    const onClick = () => {
        setCount(count + 1);
        setCountry(countryValue);
        countryValue = 'RO';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive"/>
        </div>
    );
};

export { CountryContent, CountryAction };