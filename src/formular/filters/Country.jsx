import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Dropdown} from 'semantic-ui-react';

const Country = ({ setResults }) => {
    const [ countries, setCountries] = useState([]);
    const [ countryList, setCountryList ] = useState([]);
    const [countryError, setCountryError ] = useState();

    const onChange = (value, setCountryList) => {
        setCountryList(value);
    };

    const countryOnClick = async () => {
        if (countryList.length > 0) {
            setCountryError('');
            const response = await axios(
                'https://formular-api.cyclic.app/find/country',
                {
                    method: 'get',
                    params: { countries: JSON.stringify(countryList) },
                },
            );
            setResults(await response.data);
            console.log(await response.data);
        } else {
            setCountryError('Select at least one country!')
        }
    };

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
        <div className='filter flex flex-column pt4'>
            <span>Country</span>
            <Dropdown
                options={countries}
                placeholder="country..."
                fluid
                selection
                onChange={(e, { value }) => {
                    onChange(value, setCountryList);
                }}
                multiple
            />
            {countryError && <p className='error'>{countryError}</p>}
            <Button className='w-25' content="Find" primary onClick={countryOnClick} />
        </div>
    );
};

export default Country;