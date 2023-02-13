import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import sleep from '../../utils/sleep';
import '../../styles/Form.css';

const ipadImagesNumber = 10;
let swipeData = {};
let startTime;

const SwipeEmulationContent = ({ setSwipeDisabled }) => {
    const [ start, setStart ] = useState();
    const [ touchStart, setTouchStart ] = useState(null);
    const [ touchEnd, setTouchEnd ] = useState(null);
    const [ index, setIndex ] = useState(0);
    const [ like, setLike ] = useState(false);
    const [ dislike, setDislike ] = useState(false);
    const [ hint, setHint ] = useState();
    const [ timeUntilAction, setTimeUntilAction ] = useState();
    const [ didAction, setDidAction ] = useState(false);
    const [ hintTime, setHintTime ] = useState();
    const [ timeAfterHint, setTimeAfterHint ] = useState();

    const showSwipeRight = () => {
        sleep(5000).then(() => {
            setHintTime(Date.now());
            setHint('right');
        })
    };

    const showSwipeleft = () => {
        sleep(10000).then(() => {
            setHint('left');
        });
    };

    const hideSwipe = () => {
        sleep(15000).then(() => {
            setHint(null);
        });
    }

    useEffect(() => {
        setStart(Date.now());
        showSwipeRight();
        showSwipeleft();
        hideSwipe();
    }, []);

    const images = [
        '/images/swipe/0.png',
        '/images/swipe/1.png',
        '/images/swipe/2.png',
        '/images/swipe/3.png',
        '/images/swipe/4.png',
        '/images/swipe/5.png',
        '/images/swipe/6.png',
        '/images/swipe/7.png',
        '/images/swipe/8.png',
        '/images/swipe/9.png',
        '/images/swipe/10.png',
        '/images/swipe/11.png',
        '/images/swipe/12.png',
        '/images/swipe/13.png',
        '/images/swipe/14.png',
        '/images/swipe/15.png',
        '/images/swipe/16.png',
        '/images/swipe/17.png',
        '/images/swipe/18.png',
        '/images/swipe/19.png',
    ];

    const minSwipeDistance = 50 ;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = async () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe) {
            if ( isRightSwipe ) {
                if ( !didAction ) {
                    setTimeUntilAction(Math.floor((Date.now() - start) / 1000));
                    if ( hintTime ) {
                        setTimeAfterHint(Math.floor((Date.now() - hintTime) / 1000));
                    }
                }
                setDidAction(true);
                setLike(true);
                sleep(300).then(() => {
                    setIndex(index + 1);
                    setLike(false);
                });
            }
            if ( isLeftSwipe ) {
                if ( !didAction ) {
                    setTimeUntilAction(Math.floor((Date.now() - start) / 1000));
                    if ( hintTime ) {
                        setTimeAfterHint(Math.floor((Date.now() - hintTime) / 1000));
                    }
                }
                setDidAction(true);
                setDislike(true);
                sleep(300).then(() => {
                    setIndex(index + 1);
                    setDislike(false);
                });
            }
        }
    }

    if ( index === (images.length / 2) + 2 ) {
        setSwipeDisabled(false);
    } 
    const data = {
        timeUntilAction: timeUntilAction,
        timeAfterHint: timeAfterHint ?? -1,
    };
    swipeData = data;
    startTime = start;

    return (
        <div className='imageContainer pt3 pb3 relative' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchMove={onTouchMove}>
            {index < images.length && <img className='h-100' src={images[index]} alt='error' />}
            {index >= images.length && <div className='h-100 flex items-center scale2'>Done!</div>}
            {index < images.length && <Button circular icon='close' className={`${index >= ipadImagesNumber ? 'ipadDislike' : 'dislike'}`} size='mini' color={dislike ? 'red' : 'grey'} />}
            {index < images.length && <Button circular icon='heart' className={`${index >= ipadImagesNumber ? 'ipadLike' : 'like'}`} size='mini' color={like ? 'green' : 'grey'} />}
            {hint === 'right' && !didAction && <img src={'/images/swipe/swipe-right.png'} alt='error' className='swipe' />}
            {hint === 'left' && !didAction && <img src={'/images/swipe/swipe-left.png'} alt='error' className='swipe' />}
        </div>
    );
};

const SwipeEmulationAction = ({ count, setCount, setSwipeData, disabled }) => {
    const onClick = () => {
        setCount(count + 1);
        setSwipeData({...swipeData, totalTime: Math.floor((Date.now() - startTime) / 1000)});
        swipeData = {};
        startTime = undefined;
    };
    return (
        <div className="actions mb3 flex flex-column items-center">
            <Button className='nextButton' content='Next' onClick={onClick} primary disabled={disabled} size='massive'/>
        </div>
    );
};

export { SwipeEmulationContent, SwipeEmulationAction };