import React from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/Button.css';

const StartPage = () => {
    const onClick = () => {
        console.log('starting form...');
    }

    const questions = [
        'How old are you?',
        'With what gender do you identify?',
        'Last level of education that you finished',
        'For how many years have you been using smart devices?',
        'What are you doing now?',
        'Which one do you prefer?',
        'How much time do you spend daily on a smartphone/tablet?',
        'In what industry are you currently working in?',
        'What smart devices do you own?',
        'Note from 1 to 4 (with 1 the most important and 4 the least important) with which smart device you spend most of your time',
        'Which one do you prefer?',
        'Which of the following are the reasons why you use mostly smart devices?',
        '',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Would you like to navigate throughout a feed this way? 1-not really, 5-really liked it',
        '',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Would you like to navigate throughout a feed this way? 1-not really, 5-really liked it',
        'Which one did you like the most?',
        'Which one is easier to navigate through content?',
        '',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Is this way of zooming effective? 1-not really, 5-really liked it',
        '',
        'How did this experience make you feel?',
        'How would you rate the experience? 1-not satisfying, 5-really satisfying',
        'Is this way of zooming effective? 1-not really, 5-really liked it',
        'Which one did you like the most?',
        'Which one is easier to use for zooming?',
        'Which is the amount of money you get monthly (NET)?',
        'Would you pay a monthly subscription for an app?',
        "What's the amount of the money that you would pay for a monthly subscription for an app?",
        '',
    ];

    return (<div className="App h-100 flex items-center justify-center"><Button content='Start Formular' onClick={onClick} primary /></div>);
};

export default StartPage;