import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Gender = ({ setResults }) => {
    const [ gender, setGender ] = useState({ male: false, female: false, other: false });

    const genderOnClick = async () => {
        const response = await axios(
            'https://hci-assistant-api.cyclic.app/find/gender',
            {
                method: 'get',
                params: { gender: JSON.stringify(gender) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setGender({...gender, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Gender</span>
            <Checkbox
                label='male'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'male');
                }}
            />
            <Checkbox
                label='female'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'female');
                }}
            />
            <Checkbox
                label='other'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'other');
                }}
            />
            <Button className='w-25' disabled={!gender.male && !gender.female && !gender.other} content="Find" primary onClick={genderOnClick} />
        </div>
    );
};

export default Gender;