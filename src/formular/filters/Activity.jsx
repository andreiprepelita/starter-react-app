import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const Activity = ({ setResults }) => {
    const [ activity, setActivity ] = useState({ studying: false, working: false, retired: false, unemployed: false });

    const activityOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/activity',
            {
                method: 'get',
                params: { activity: JSON.stringify(activity) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setActivity({...activity, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Activity</span>
            <Checkbox
                label='studying'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'studying');
                }}
            />
            <Checkbox
                label='working'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'working');
                }}
            />
            <Checkbox
                label='retired'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'retired');
                }}
            />
            <Checkbox
                label='unemployed'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'unemployed');
                }}
            />
            <Button className='w-25' disabled={!activity.studying && !activity.working && !activity.retired && !activity.unemployed} content="Find" primary onClick={activityOnClick} />
        </div>
    );
};

export default Activity;