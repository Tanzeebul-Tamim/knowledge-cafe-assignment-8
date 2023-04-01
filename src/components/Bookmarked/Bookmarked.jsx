import React, { useEffect, useState } from 'react';
import Titles from '../Titles/Titles';
import './Bookmarked.css'

const Bookmarked = ({arr}) => {

    return (
        <div className='card bookmarked'>
            <h1 className="h5 fw-bold">Bookmarked Blogs: {arr.length}</h1>
            <div>
               {
                arr.map(ar => <Titles ar={ar} ></Titles>)
               }
            </div>
        </div>
    );
};

export default Bookmarked;