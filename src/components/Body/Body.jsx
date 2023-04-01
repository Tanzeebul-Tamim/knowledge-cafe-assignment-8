import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./Body.css";

const Body = () => {
  const [postCards, setPostCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPostCards(data));
  }, []);

  return (
    <div className="row">
      <div className="posts-container col-md-8">
        {
            postCards.map(postCard => <PostCard cardData={postCard}></PostCard>)
        }
      </div>
      <div className="col-md-4">
        
      </div>
    </div>
  );
};

export default Body;
