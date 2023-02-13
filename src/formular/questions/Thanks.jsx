import React from "react";
import { Button } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ThanksContent = () => {
    return (
    <div className="content flex flex-column items-center justify-around pl4 pr4">
        <div className="question lh-copy">Thank you for your patience and help in responding to this questionnaire. The details that you provided are going to help to have a better understanding of the user, their needs, the way they feel and interact with the products.</div>
    </div>
    );
};

const ThanksAction = ({ data }) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }
    const submit = async () => {
        const response = await axios(
            'https://hci-assistant-api.cyclic.app/save',
            {
                method: 'post',
                data: data,
            },
        );
        routeChange();
    }
    return (
        <div className="actions mb5 flex flex-column items-center">
            <Button content='Finish' onClick={submit} primary size="massive" />
        </div>
    );
};

export { ThanksContent, ThanksAction };