import React from 'react';
import './Titles.css';

const Titles = ({ar}) => {
    return (
        <div className='mb-3 ms-3 title-container'>
            <h1 className='h6 fw-bold'>{ar}</h1>
        </div>
    );
};

export default Titles;