import React, { useState, useEffect } from 'react';
import Age from './filters/Age';
import '../styles/Dashboard.css';
import Gender from './filters/Gender';
import Education from './filters/Education';
import UsingSmartDevices from './filters/UsingSmartDevices';
import Activity from './filters/Activity';
import OwnedDevices from './filters/OwnedDevices';
import Reasons from './filters/Reasons';
import MonthlyAmount from './filters/MonthlyAmount';
import Monetization from './filters/Monetization';
import MonetizationLevel from './filters/MonetizationLevel';
import WorkIndustry from './filters/WorkIndustry';
import DonutChart from 'react-donut-chart';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import Country from './filters/Country';

const Dashboard = () => {
    const [ results, setResults ] = useState();
    const [ swipeWithoutHint, setSwipeWithoutHint ] = useState();
    const [ swipeWithHint, setSwipeWithHint ] = useState();
    const [ scrollWithoutHint, setScrollWithoutHint ] = useState();
    const [ scrollWithHint, setScrollWithHint ] = useState();
    const [ doubleTapWithoutHint, setDoubleTapWithoutHint ] = useState();
    const [ doubleTapWithHint, setDoubleTapWithHint ] = useState();
    const [ pinchSpreadWithoutHint, setPinchSpreadWithoutHint ] = useState();
    const [ pinchSpreadWithHint, setPinchSpreadWithHint ] = useState();
    const [experiences, setExperiences ] = useState([
        {
            name: 'swipe',
            interested: 0,
            happy: 0,
            intrigued: 0,
            frustrated: 0,
            enjoyed: 0,
        },
        {
            name: 'scroll',
            interested: 0,
            happy: 0,
            intrigued: 0,
            frustrated: 0,
            enjoyed: 0,
        },
        {
            name: 'double tap',
            interested: 0,
            happy: 0,
            intrigued: 0,
            frustrated: 0,
            enjoyed: 0,
        },{
            name: 'pinch & spread',
            interested: 0,
            happy: 0,
            intrigued: 0,
            frustrated: 0,
            enjoyed: 0,
        },
    ]);
    const [experienceRatings, setExperienceRatings] = useState([
        {
            name: 'swipe',
            rating: 0,
        },
        {
            name: 'scroll',
            rating: 0,
        },
        {
            name: 'double tap',
            rating: 0,
        },
        {
            name: 'pinch & spread',
            rating: 0,
        },
    ]);
    const [navigateRatings, setNavigateRatings] = useState([
        {
            name: 'swipe',
            rating: 0,
        },
        {
            name: 'scroll',
            rating: 0,
        },
        {
            name: 'double tap',
            rating: 0,
        },
        {
            name: 'pinch & spread',
            rating: 0,
        },
    ]);
    const [chartKey, setChartKey] = useState('chart1');

    const calculateExperiences = () => {
        const newExperiences = experiences;
        const newExperienceRatings = experienceRatings;
        const newNavigateRatings = navigateRatings;
        results.forEach(result => {
            switch (result.swipeExperienceFeeling) {
                case 'interested':
                    newExperiences[0].interested++;
                    break;
                case 'happy':
                    newExperiences[0].happy++;
                    break;
                case 'intrigued':
                    newExperiences[0].intrigued++;
                    break;
                case 'frustrated':
                    experiences[0].frustrated++;
                    break;
                case 'enjoyed':
                    newExperiences[0].enjoyed++;
                    break;
            
                default:
                    break;
            }
            switch (result.scrollExperienceFeeling) {
                case 'interested':
                    newExperiences[1].interested++;
                    break;
                case 'happy':
                    newExperiences[1].happy++;
                    break;
                case 'intrigued':
                    newExperiences[1].intrigued++;
                    break;
                case 'frustrated':
                    experiences[1].frustrated++;
                    break;
                case 'enjoyed':
                    newExperiences[1].enjoyed++;
                    break;
            
                default:
                    break;
            }
            switch (result.doubleTapExperienceFeeling) {
                case 'interested':
                    newExperiences[2].interested++;
                    break;
                case 'happy':
                    newExperiences[2].happy++;
                    break;
                case 'intrigued':
                    newExperiences[2].intrigued++;
                    break;
                case 'frustrated':
                    experiences[2].frustrated++;
                    break;
                case 'enjoyed':
                    newExperiences[2].enjoyed++;
                    break;
            
                default:
                    break;
            }
            switch (result.pinchSpreadExperienceFeeling) {
                case 'interested':
                    newExperiences[3].interested++;
                    break;
                case 'happy':
                    newExperiences[3].happy++;
                    break;
                case 'intrigued':
                    newExperiences[3].intrigued++;
                    break;
                case 'frustrated':
                    experiences[3].frustrated++;
                    break;
                case 'enjoyed':
                    newExperiences[3].enjoyed++;
                    break;
            
                default:
                    break;
            }

            newExperienceRatings[0].rating += result.swipeRateExperience;
            newExperienceRatings[1].rating += result.scrollRateExperience;
            newExperienceRatings[2].rating += result.doubleTapRateExperience;
            newExperienceRatings[3].rating += result.pinchSpreadRateExperience;

            newNavigateRatings[0].rating += result.swipeNavigate;
            newNavigateRatings[1].rating += result.scrollNavigate;
            newNavigateRatings[2].rating += result.doubleTapNavigate;
            newNavigateRatings[3].rating += result.zoomEffective;
        });
        setExperiences(newExperiences);
        newExperienceRatings.forEach((item) => {
            item.rating = Number((item.rating / results?.length).toFixed(2));
        })
        setExperienceRatings(newExperienceRatings);
        newNavigateRatings.forEach((item) => {
            item.rating = Number((item.rating / results?.length).toFixed(2));
        })
        setNavigateRatings(newNavigateRatings);

        if (chartKey === 'chart1') {
            setChartKey('chart2');
        } else {
            setChartKey('chart1');
        }
    };

    useEffect(() => {
        setSwipeWithoutHint(results?.filter((result) => result.swipeData.timeAfterHint === -1));
        setSwipeWithHint(results?.filter((result) => result.swipeData.timeAfterHint !== -1));
        setScrollWithoutHint(results?.filter((result) => result.scrollData.timeAfterHint === -1));
        setScrollWithHint(results?.filter((result) => result.scrollData.timeAfterHint !== -1));
        setDoubleTapWithoutHint(results?.filter((result) => result.doubleTapData.timeAfterHint === -1));
        setDoubleTapWithHint(results?.filter((result) => result.doubleTapData.timeAfterHint !== -1));
        setPinchSpreadWithoutHint(results?.filter((result) => result.pinchSpreadData.timeAfterHint === -1));
        setPinchSpreadWithHint(results?.filter((result) => result.pinchSpreadData.timeAfterHint !== -1));
        if (results) {
            calculateExperiences();
        }
    }, [results]);
    
    return (
        <div className="dashboard w-100 h-100">
            <div className="title w-100 pt2 pb2">Dashboard</div>
            <div className='dashboardContent flex justify-between'>
                <div className="filterContainer h-100 w-30 overflow-y-scroll">
                    <div className='filterList h-100 flex flex-column pl4 pr4'>
                        <div className='age'>
                            <Age setResults={setResults} />
                        </div>
                        <div className='gender'>
                            <Gender setResults={setResults} />
                        </div>
                        <div className='country'>
                            <Country setResults={setResults} />
                        </div>
                        <div className='education'>
                            <Education setResults={setResults} />
                        </div>
                        <div className='usingSmartDevices'>
                            <UsingSmartDevices setResults={setResults} />
                        </div>
                        <div className='activity'>
                            <Activity setResults={setResults} />
                        </div>
                        <div className='workIndustry'>
                            <WorkIndustry setResults={setResults} />
                        </div>
                        <div className='ownedDevices'>
                            <OwnedDevices setResults={setResults} />
                        </div>
                        <div className='reasons'>
                            <Reasons setResults={setResults} />
                        </div>
                        <div className='monthlyAmount'>
                            <MonthlyAmount setResults={setResults} />
                        </div>
                        <div className='monetization'>
                            <Monetization setResults={setResults} />
                        </div>
                        <div className='monetizationLevel'>
                            <MonetizationLevel setResults={setResults} />
                        </div>
                    </div>
                </div>
                {(swipeWithHint || swipeWithoutHint) && <div className='resultsContainer h-100 w-70 overflow-y-scroll pa4'>
                    <p className='resultHeader'>Results: {results?.length ?? ''}</p>
                    {results.length > 0 && (<div>
                        <div className='charts'>
                            <div className='chartItem'>
                                <p className='resultHeader'>Swipe:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((swipeWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((swipeWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(swipeWithoutHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(swipeWithoutHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        hint:
                                        <ul>
                                            <li>
                                                total time: {(swipeWithHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(swipeWithHint?.reduce((accumulator, result) => { return accumulator + result.swipeData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(swipeWithHint?.reduce((accumulator, result) => {
                                                    if (result.swipeData.timeAfterHint >= 0) {
                                                        return accumulator + result.swipeData.timeAfterHint;
                                                    }
                                                    return accumulator;
                                                    }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Scroll:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((scrollWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((scrollWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(scrollWithoutHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(scrollWithoutHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        hint:
                                        <ul>
                                            <li>
                                                total time: {(scrollWithHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(scrollWithHint?.reduce((accumulator, result) => { return accumulator + result.scrollData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(scrollWithHint?.reduce((accumulator, result) => {
                                                    if (result.scrollData.timeAfterHint >= 0) {
                                                        return accumulator + result.scrollData.timeAfterHint;
                                                    }
                                                    return accumulator;
                                                    }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Double tap:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((doubleTapWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((doubleTapWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        with hint:
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.doubleTapData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(doubleTapWithHint?.reduce((accumulator, result) => {
                                                    if (accumulator + result.doubleTapData.timeAfterHint >= 0) {
                                                        return accumulator + result.doubleTapData.timeAfterHint
                                                    }
                                                    return accumulator;
                                                    }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Pinch & spread:</p>
                                <div>
                                    <div>
                                        <DonutChart
                                            data={[
                                                { label: 'no hint', value: Number(((pinchSpreadWithoutHint?.length / results?.length) * 100).toFixed(2)) },
                                                { label: 'hint', value: Number(((pinchSpreadWithHint?.length / results?.length) * 100).toFixed(2)) }
                                            ]}
                                            className='chart'
                                            width={370}
                                            height={250}
                                        />
                                        <p>no hint:</p>
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithoutHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        hint:
                                        <ul>
                                            <li>
                                                total time: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.totalTime }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action: {(doubleTapWithHint?.reduce((accumulator, result) => { return accumulator + result.pinchSpreadData.timeUntilAction }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                            <li>
                                                time until action after hint: {(doubleTapWithHint?.reduce((accumulator, result) => {
                                                    if (result.pinchSpreadData.timeAfterHint >= 0) {
                                                        return accumulator + result.pinchSpreadData.timeAfterHint
                                                    }
                                                    return accumulator;
                                                    }, 0) / results?.length).toFixed(2) || ''}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Experience feeling</p>
                                <BarChart
                                    key={chartKey}
                                    width={550}
                                    height={300}
                                    data={experiences}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="interested" fill="#8884d8" />
                                    <Bar dataKey="happy" fill="#82ca9d" />
                                    <Bar dataKey="intrigued" fill="#e05151" />
                                    <Bar dataKey="frustrated" fill="#fc9608" />
                                    <Bar dataKey="enjoyed" fill="#2de1fc" />
                                </BarChart>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Experience feeling</p>
                                <BarChart
                                    key={chartKey}
                                    width={550}
                                    height={300}
                                    data={experienceRatings}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="rating" fill="#8884d8" />
                                </BarChart>
                            </div>
                            <div className='chartItem'>
                                <p className='resultHeader'>Navigate / Effective zoom</p>
                                <BarChart
                                    key={chartKey}
                                    width={550}
                                    height={300}
                                    data={navigateRatings}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="rating" fill="#8884d8" />
                                </BarChart>
                            </div>
                        </div>
                        <div className='pt6'>
                            <p>Preference between swipe and scroll: {results?.filter((result) => result.swipeOrScroll === 'scroll' ).length < results?.filter((result) => result.swipeOrScroll === 'swipe' ).length ? 'swipe' : 'scroll'}</p>
                            <p>Better experience between swipe and scroll: {results?.filter((result) => result.likeSwipeOrScroll === 'scroll' ).length < results?.filter((result) => result.likeSwipeOrScroll === 'swipe' ).length ? 'swipe' : 'scroll'}</p>
                            <p>Preference between double tap and pinch & spread: {results?.filter((result) => result.zoom === 'doubleTap' ).length < results?.filter((result) => result.zoom === 'pinchSpread' ).length ? 'pinch & spread' : 'double tap'}</p>
                            <p>Better experience between tap and pinch & spread: {results?.filter((result) => result.likeDoubleTapOrPinchSpread === 'doubleTap' ).length < results?.filter((result) => result.likeDoubleTapOrPinchSpread === 'pinchSpread' ).length ? 'pinch & spread' : 'double tap'}</p>
                            <p>Time spent daily on smartphone/tablet: {((results?.reduce((accumulator, result) => { return accumulator + result.usingSmartDevices }, 0)) / results?.length).toFixed(2) || ''}</p>
                            <p>Easier to navigate: {results?.filter((result) => result.easierSwipeOrScroll === 'scroll' ).length < results?.filter((result) => result.easierSwipeOrScroll === 'swipe' ).length ? 'swipe' : 'scroll'}</p>
                            <p>Easier to zoom: {results?.filter((result) => result.easierDoubleTapOrPinchSpread === 'doubleTap' ).length < results?.filter((result) => result.easierDoubleTapOrPinchSpread === 'pinchSpread' ).length ? 'pinch & spread' : 'doubleTap'}</p>
                            <p>For swipe, best experience was on: {results?.filter((result) => result.swipeBestExperience === 'phone' ).length < results?.filter((result) => result.swipeBestExperience === 'tablet' ).length ? 'tablet' : 'phone'}</p>
                            <p>For scroll, best experience was on: {results?.filter((result) => result.scrollBestExperience === 'phone' ).length < results?.filter((result) => result.scrollBestExperience === 'tablet' ).length ? 'tablet' : 'phone'}</p>
                            <p>For double tap, best experience was on: {results?.filter((result) => result.doubleTapBestExperience === 'phone' ).length < results?.filter((result) => result.doubleTapBestExperience === 'tablet' ).length ? 'tablet' : 'phone'}</p>
                            <p>For pinch & spread, best experience was on: {results?.filter((result) => result.pinchSpreadBestExperience === 'phone' ).length < results?.filter((result) => result.pinchSpreadBestExperience === 'tablet' ).length ? 'tablet' : 'phone'}</p>
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    );
};

export default Dashboard;