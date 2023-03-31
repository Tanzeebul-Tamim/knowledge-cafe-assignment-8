import React, { useEffect, useState } from 'react';
import './Body.css';

const Body = () => {
    const [postCards, setPostCards] = useState ([]);
    
    useEffect (() => {
        fetch ("data.json")
        .then (res => res.json())
        .then (data => setPostCards(data));
    }, []);

    return (
        <div>
            <div className='posts-container'>
                {
                    postCards.map(postCard => console.log(postCard))
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Body;