import React, { useEffect, useState } from 'react';
import './Bookmarked.css'

const Bookmarked = ({cards}) => {

    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
    useEffect (() => {
        const markedBlogs = JSON.parse(localStorage.getItem("bookmark"));
        setBookmarkedBlogs(markedBlogs);
    }, [JSON.parse(localStorage.getItem("bookmark"))])

    return (
        <div className='card bookmarked'>
            <h1 className="h5 fw-bold">Bookmarked Blogs: {bookmarkedBlogs ? bookmarkedBlogs.length : 0}</h1>
            <div>
               
            </div>
        </div>
    );
};

export default Bookmarked;