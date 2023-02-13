import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Education = ({ setResults }) => {
    const [ education, setEducation ] = useState({ middleSchool: false, highSchool: false, universityStudies: false });

    const educationOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/education',
            {
                method: 'get',
                params: { education: JSON.stringify(education) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setEducation({...education, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Education</span>
            <Checkbox
                label='middleSchool'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'middleSchool');
                }}
            />
            <Checkbox
                label='highSchool'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'highSchool');
                }}
            />
            <Checkbox
                label='universityStudies'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'universityStudies');
                }}
            />
            <Button className='w-25' disabled={!education.middleSchool && !education.highSchool && !education.universityStudies} content="Find" primary onClick={educationOnClick} />
        </div>
    );
};

export default Education;