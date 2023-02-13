import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import sleep from '../../utils/sleep';
import '../../styles/Form.css';

let pinchSpreadData = {};
let startTime;

const PinchSpreadEmulationContent = ({ setPinchSpreadDisabled }) => {
    const [ start, setStart ] = useState();
    const [ index, setIndex ] = useState(0);
    const [ hint, setHint ] = useState();
    const [ timeUntilAction, setTimeUntilAction ] = useState();
    const [ didAction, setDidAction ] = useState(false);
    const [ hintTime, setHintTime ] = useState();
    const [ timeAfterHint, setTimeAfterHint ] = useState();
    const [ scale, setScale ] = useState('');
    const [ found, setFound ] = useState(false);

    const showHint = () => {
        sleep(5000).then(() => {
            setHintTime(Date.now());
            setHint(true);
        })
    };

    const hideHint = () => {
        sleep(10000).then(() => {
            setHint(null);
        });
    }

    useEffect(() => {
        setStart(Date.now());
        showHint();
        hideHint();
    }, []);

    const images = [
        '/images/pinch&spread/find-waldo.png',
        '/images/pinch&spread/find-waldo-ipad.png',
    ];

    const data = {
        timeUntilAction: timeUntilAction,
        timeAfterHint: timeAfterHint ?? -1,
    };
    pinchSpreadData = data;
    startTime = start;

    const evCache = [];
    let prevDiff = -1;

    const pointerDownHandler = (e) => {
        evCache.push(e);
    };

    const pointerMoveHandler = (e) => {
        const index = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
        evCache[index] = e;
 
        if (evCache.length === 2) {
          const curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);
      
          if (prevDiff > 0) {
            if (curDiff > prevDiff) {
               setScale('2');
               setFound(true);
               if ( !didAction ) {
                    setTimeUntilAction(Math.floor((Date.now() - start) / 1000));
                    if ( hintTime ) {
                        setTimeAfterHint(Math.floor((Date.now() - hintTime) / 1000));
                    }
                }
                setDidAction(true);
                setPinchSpreadDisabled(false);
                sleep(2000).then(() => {
                    if ( index < images.length - 1 ) {
                        setIndex(index + 1);
                    }
                    setFound(false);
                    setScale('1');
                });
            }
            if (curDiff < prevDiff) {
                setScale('1');
            }
          }
          prevDiff = curDiff;
        }
    };

    const removeEvent = (e) => {
        const index = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
        evCache.splice(index, 1);
      }

    const pointerUpHandler = (e) => {
        removeEvent(e);
        if (evCache.length < 2) {
          prevDiff = -1;
        }
      }

    return (
        <div className='imageContainer pt3 pb3 relative overflow-hidden h-100' >
            <img
                src={images[index]}
                alt="error"
                className='h-100'
                onPointerDown={pointerDownHandler}
                onPointerMove={pointerMoveHandler}
                onPointerUp={pointerUpHandler}
                onPointerCancel={pointerUpHandler}
                onPointerOut={pointerUpHandler}
                onPointerLeave={pointerUpHandler}
                style={{ scale: scale }}
            />
            {found && scale ==='2' && <div className={`${index < 1 ? 'found' : 'foundIpad'} scale2`}>Found!</div>}
            {hint && !didAction && <img src={'/images/pinch&spread/hint.png'} alt='error' className='pinch' />}
        </div>
    );
};

const PinchSpreadEmulationAction = ({ count, setCount, setPinchSpreadData, disabled }) => {
    const onClick = () => {
        setCount(count + 1);
        setPinchSpreadData({...pinchSpreadData, totalTime: Math.floor((Date.now() - startTime) / 1000)});
        pinchSpreadData = {};
        startTime = undefined;
    };
    return (
        <div className="actions mb3 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary disabled={disabled} size='massive' />
        </div>
    );
};

export { PinchSpreadEmulationContent, PinchSpreadEmulationAction };