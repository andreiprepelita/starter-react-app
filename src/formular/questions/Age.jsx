import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Button } from 'semantic-ui-react';
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/Form.css';

let value = new Date();

const AgeContent = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        {/* <div className="question">How old are you?</div> */}
        <div className="flex flex-column items-center scale15 h-50">
            <ReactDatePicker
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    value = date;
                }}
                showYearDropdown
                dateFormatCalendar="MMMM"
                yearDropdownItemNumber={100}
                scrollableYearDropdown
                maxDate={new Date()}
            />
        </div>
    </div>
    );
};

const AgeAction = ({ count, setCount, setBirthday }) => {
    const onClick = () => {
        setCount(count + 1);
        setBirthday(value);
        value = new Date();
    };
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary size="massive" />
        </div>
    );
};

export { AgeContent, AgeAction };