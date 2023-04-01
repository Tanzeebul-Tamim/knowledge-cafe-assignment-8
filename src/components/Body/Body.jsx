import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import ReadTime from "../ReadTime/ReadTime";
import "./Body.css";

const Body = () => {

  const [postCards, setPostCards] = useState([]);
  const [readTime, setReadTime] = useState("");

  const handleReadTime = (duration) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + duration;
      localStorage.setItem("readTime", sum);
      setReadTime (sum);
    }
    else {
      localStorage.setItem("readTime", duration);
      setReadTime (duration);
    }
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPostCards(data));
  }, []);

  return (
    <div className="row gx-3">
      <div className="posts-container col-md-8">
        {
            postCards.map(postCard => <PostCard key={postCard.id} handleReadTime={handleReadTime} cardData={postCard}></PostCard>)
        }
      </div>
      <div className="col-md-4">
        <ReadTime readTime={readTime}></ReadTime>
      </div>
    </div>
  );
};

export default Body;
