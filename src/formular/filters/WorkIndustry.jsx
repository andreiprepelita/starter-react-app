import React, { useState } from 'react';
import { Checkbox, Button } from 'semantic-ui-react';
import axios from "axios";
import '../../styles/Dashboard.css';

const WorkIndustry = ({ setResults }) => {
    const [ workIndustry, setWorkIndustry ] = useState({
        health: false,
        art: false,
        politics: false,
        sales: false,
        'computer&technology': false,
        agriculture: false,
        aerospace: false,
        construction: false,
        education: false,
        energy: false,
        entertainment: false,
        fashion: false,
        'finance&economic': false,
        'food&beverage': false,
        hospitality: false,
        manufacturing: false,
        'media&news': false,
        mining: false,
        pharmaceutical: false,
        telecomunications: false,
        transportation: false,
        'advertising&marketing': false,
    });

    const workIndustryOnClick = async () => {
        const response = await axios(
            'https://formular-api.cyclic.app/find/workIndustry',
            {
                method: 'get',
                params: { workIndustry: JSON.stringify(workIndustry) },
            },
        );
        setResults(await response.data)
    };

    const onChange = (e, { checked }, key) => {
        setWorkIndustry({...workIndustry, [key]: checked});
    };

    return (
        <div className='filter flex flex-column'>
            <span>Working area</span>
            <Checkbox
                label='art'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'art');
                }}
            />
            <Checkbox
                label='health'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'health');
                }}
            />
            <Checkbox
                label='politics'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'politics');
                }}
            />
            <Checkbox
                label='sales'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'sales');
                }}
            />
            <Checkbox
                label='computer&technology'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'computer&technology');
                }}
            />
            <Checkbox
                label='agriculture'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'agriculture');
                }}
            />
            <Checkbox
                label='aerospace'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'aerospace');
                }}
            />
            <Checkbox
                label='construction'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'construction');
                }}
            />
            <Checkbox
                label='education'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'education');
                }}
            />
            <Checkbox
                label='energy'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'energy');
                }}
            />
            <Checkbox
                label='entertainment'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'entertainment');
                }}
            />
            <Checkbox
                label='fashion'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'fashion');
                }}
            />
            <Checkbox
                label='finance&economic'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'finance&economic');
                }}
            />
            <Checkbox
                label='food&beverage'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'food&beverage');
                }}
            />
            <Checkbox
                label='hospitality'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'hospitality');
                }}
            />
            <Checkbox
                label='manufacturing'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'manufacturing');
                }}
            />
            <Checkbox
                label='media&news'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'media&news');
                }}
            />
            <Checkbox
                label='mining'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'mining');
                }}
            />
            <Checkbox
                label='pharmaceutical'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'pharmaceutical');
                }}
            />
            <Checkbox
                label='telecomunications'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'telecomunications');
                }}
            />
            <Checkbox
                label='transportation'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'transportation');
                }}
            />
            <Checkbox
                label='advertising&marketing'
                onChange={(e, { checked }) => {
                    onChange(e, { checked }, 'advertising&marketing');
                }}
            />
            <Button
                className='w-25'
                disabled={!workIndustry['advertising&marketing'] &&
                    !workIndustry.aerospace &&
                    !workIndustry.agriculture &&
                    !workIndustry.art &&
                    !workIndustry['computer&technology'] &&
                    !workIndustry.construction &&
                    !workIndustry.education &&
                    !workIndustry.energy &&
                    !workIndustry.entertainment &&
                    !workIndustry.fashion &&
                    !workIndustry['finance&economic'] &&
                    !workIndustry['food&beverage'] &&
                    !workIndustry.health &&
                    !workIndustry.hospitality &&
                    !workIndustry.manufacturing &&
                    !workIndustry['media&news'] &&
                    !workIndustry.mining &&
                    !workIndustry.pharmaceutical &&
                    !workIndustry.politics &&
                    !workIndustry.sales &&
                    !workIndustry.telecomunications &&
                    !workIndustry.transportation
                }
                content="Find"
                primary
                onClick={workIndustryOnClick}
            />
        </div>
    );
};

export default WorkIndustry;