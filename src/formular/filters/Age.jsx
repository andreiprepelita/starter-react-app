import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Age = ({ setResults }) => {
    const [ ageMin, setAgeMin ] = useState();
    const [ ageMax, setAgeMax ] = useState();
    const [ ageError, setAgeError ] = useState();

    const ageMinHandler = (e) => {
        setAgeMin(Number(e.target.value));
    };

    const ageMaxHandler = (e) => {
        setAgeMax(Number(e.target.value));
    };

    const ageOnClick = async () => {
        if (ageMin && ageMax) {
            if (ageMax < ageMin || ageMax < 15 || ageMin < 15) {
                setAgeError('Age must be greater than 15. Max value must be greater or equal to min value!')
            } else {
                setAgeError('');
                const response = await axios(
                    'https://hci-assistant-api.cyclic.app/find/age',
                    {
                        method: 'get',
                        params: { ageMin: ageMin, ageMax: ageMax },
                    },
                );
                setResults(await response.data)
            }
        } else {
            setAgeError('Both fields must be filled.');
        }
    };

    return (
        <div className='filter flex flex-column pt4'>
            <span>Age</span>
            <div className='ageMin'>
                <span>min:</span>
                <Input type='number' onChange={ageMinHandler} />
            </div>
            <div className='ageMax'>
                <span>max:</span>
                <Input type='number' onChange={ageMaxHandler} />
            </div>
            {ageError && <p className='error'>{ageError}</p>}
            <Button className='w-25' content="Find" primary onClick={ageOnClick} />
        </div>
    );
};

export default Age;