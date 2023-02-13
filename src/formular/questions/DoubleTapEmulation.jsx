import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import sleep from '../../utils/sleep';
import '../../styles/Form.css';

let doubleTapData = {};
let startTime;

const DoubleTapEmulationContent = ({ setDoubleTapDisabled }) => {
    const [ start, setStart ] = useState();
    const [ index, setIndex ] = useState(0);
    const [ hint, setHint ] = useState();
    const [ timeUntilAction, setTimeUntilAction ] = useState();
    const [ didAction, setDidAction ] = useState(false);
    const [ hintTime, setHintTime ] = useState();
    const [ timeAfterHint, setTimeAfterHint ] = useState();
    const [ scale, setScale ] = useState('1');
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
        '/images/doubleTap/find-waldo.png',
        '/images/doubleTap/find-waldo-ipad.png',
    ];

    const data = {
        timeUntilAction: timeUntilAction,
        timeAfterHint: timeAfterHint ?? -1,
    };
    doubleTapData = data;
    startTime = start;

    let tapedTwice = false;

    const tapHandler = (event) => {
        if(!tapedTwice) {
            tapedTwice = true;
            setTimeout( function() { tapedTwice = false; }, 300 );
            return false;
        }
        event.preventDefault();
        if (event.touches.length < 2) {
            setScale('2');
            setFound(true);
            if ( !didAction ) {
                setTimeUntilAction(Math.floor((Date.now() - start) / 1000));
                if ( hintTime ) {
                    setTimeAfterHint(Math.floor((Date.now() - hintTime) / 1000));
                }
            }
            setDidAction(true);
            setDoubleTapDisabled(false);
            sleep(2000).then(() => {
                if ( index < images.length - 1 ) {
                    setIndex(index + 1);
                }
                setScale('1');
                setFound(false);
            });
        }
    }

    return (
        <div
            className='imageContainer pt3 pb3 relative overflow-hidden h-100'
        >
            <img src={images[index]} alt="error" className='h-100' onTouchStart={tapHandler} style={{ scale: scale }} />
            {found && scale ==='2' && <div className={`${index < 1 ? 'found' : 'foundIpad'} scale2`}>Found!</div>}
            {hint && !didAction && <img src={'/images/doubleTap/hint.png'} alt='error' className='doubleTap' />}
        </div>
    );
};

const DoubleTapEmulationAction = ({ count, setCount, setDoubleTapData, disabled }) => {
    const onClick = () => {
        setCount(count + 1);
        setDoubleTapData({...doubleTapData, totalTime: Math.floor((Date.now() - startTime) / 1000)});
        doubleTapData = {};
        startTime = undefined;
    };
    return (
        <div className="actions mb3 flex flex-column items-center">
            <Button content='Next' onClick={onClick} primary disabled={disabled} size='massive' />
        </div>
    );
};

export { DoubleTapEmulationContent, DoubleTapEmulationAction };