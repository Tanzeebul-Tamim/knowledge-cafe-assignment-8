import React, { useEffect, useState } from 'react';
import './ReadTime.css';

const ReadTime = ({readTime}) => {

    const [time, setTime] = useState(readTime);

    useEffect (() => {
        const getReadTime = localStorage.getItem("readTime");
        setTime (getReadTime);
    }, [readTime]);

    return (
        <div>
            <h1 className='h5 fw-bold readTime rounded-3 text-center'>Spent time on reading : {time ? time : 0} min</h1>        
        </div>
    );
};

export default ReadTime;