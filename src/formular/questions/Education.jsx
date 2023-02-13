import React, { useState } from "react";
import { Button, Radio } from 'semantic-ui-react';

let educationValue = 'middleSchool';

const onChange = (e, { value }, setEducation) => {
    setEducation(value);
    educationValue = value;
};

const EducationContent = () => {
    const [ education, setEducation ] = useState('middleSchool');
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">Last level of education that you finished</div> */}
        <Radio
            className="scale2"
            label='Middle school'
            name='radioGroup'
            value='middleSchool'
            checked={education === 'middleSchool'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEducation)
            }}
        />
        <Radio
            className="scale2"
            label='High school'
            name='radioGroup'
            value='highSchool'
            checked={education === 'highSchool'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEducation)
            }}
        />
        <Radio
            className="scale2"
            label='University studies'
            name='radioGroup'
            value='universityStudies'
            checked={education === 'universityStudies'}
            onChange={(e, { value }) => {
                onChange(e, { value }, setEducation)
            }}
        />
    </div>
    );
};

const EducationAction = ({ count, setCount, setEducation }) => {
    const onClick = () => {
        setCount(count + 1);
        setEducation(educationValue);
        educationValue = 'middleSchool';
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { EducationContent, EducationAction };