import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import sleep from '../../utils/sleep';
import '../../styles/Form.css';

let scrollData = {};
let startTime;

const ScrollEmulationContent = ({ setScrollDisabled }) => {
    const [ start, setStart ] = useState();
    const [ touchStart, setTouchStart ] = useState(null);
    const [ touchEnd, setTouchEnd ] = useState(null);
    const [ index, setIndex ] = useState(0);
    const [ hint, setHint ] = useState();
    const [ timeUntilAction, setTimeUntilAction ] = useState();
    const [ didAction, setDidAction ] = useState(false);
    const [ hintTime, setHintTime ] = useState();
    const [ timeAfterHint, setTimeAfterHint ] = useState();

    const showHint = () => {
        sleep(5000).then(() => {
            setHintTime(Date.now());
            setHint(true);
        })
    };

    const hideSwipe = () => {
        sleep(10000).then(() => {
            setHint(false);
        });
    }

    useEffect(() => {
        setStart(Date.now());
        showHint();
        hideSwipe();
    }, []);

    const images = [
        '/images/scroll/0.gif',
        '/images/scroll/1.gif',
        '/images/scroll/2.gif',
        '/images/scroll/3.gif',
        '/images/scroll/4.gif',
        '/images/scroll/5.gif',
        '/images/scroll/6.gif',
        '/images/scroll/7.gif',
        '/images/scroll/8.gif',
        '/images/scroll/9.gif',
    ];

    const minSwipeDistance = 50 ;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

    const onTouchEnd = async () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isUpSwipe = distance > minSwipeDistance;
        const isDownSwipe = distance < -minSwipeDistance;
        if (isDownSwipe || isUpSwipe) {
            if ( isDownSwipe ) {
                if ( !didAction ) {
                    setTimeUntilAction(Math.floor((Date.now() - start) / 1000));
                    if ( hintTime ) {
                        setTimeAfterHint(Math.floor((Date.now() - hintTime) / 1000));
                    }
                }
                setDidAction(true);
                sleep(250).then(() => {
                    if ( index > 0) {
                        setIndex(index - 1);
                    }
                });
            }
            if ( isUpSwipe ) {
                if ( !didAction ) {
                    setTimeUntilAction(Math.floor((Date.now() - start) / 1000));
                    if ( hintTime ) {
                        setTimeAfterHint(Math.floor((Date.now() - hintTime) / 1000));
                    }
                }
                setDidAction(true);
                sleep(250).then(() => {
                    if ( index < images.length - 1 ) {
                        setIndex(index + 1);
                    }
                });
            }
        }
    }

    if ( didAction ) {
        setScrollDisabled(false);
    } 
    const data = {
        timeUntilAction: timeUntilAction,
        timeAfterHint: timeAfterHint ?? -1,
    };
    scrollData = data;
    startTime = start;

    return (
        <div className='imageContainerIpad scrollImageContainer pt3 pb3 relative' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchMove={onTouchMove}>
            {index < images.length && <img className='h-100' src={images[index]} alt='error' />}
            {index >= images.length && <div className='h-100 flex items-center'>Done!</div>}
            {hint && !didAction && <img src={'/images/scroll/scroll-hint.png'} alt='error' className='swipe' />}
        </div>
    );
};

const ScrollEmulationAction = ({ count, setCount, setScrollData, disabled }) => {
    const onClick = () => {
        setCount(count + 1);
        setScrollData({...scrollData, totalTime: Math.floor((Date.now() - startTime) / 1000)});
        scrollData = {};
        startTime = undefined;
    };
    return (
        <div className="actions mb3 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary disabled={disabled} size='massive' />
        </div>
    );
};

export { ScrollEmulationContent, ScrollEmulationAction };