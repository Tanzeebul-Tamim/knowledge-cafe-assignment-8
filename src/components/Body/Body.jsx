import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import Questions from "../Questions/Questions";
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
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", duration);
      setReadTime(duration);
    }
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPostCards(data));
  }, []);

  const [arr, setArr] = useState([]);

  const blogTitle = (title) => {
    setArr((prevArr) => [...prevArr, title]);
  };

  return (
    <div>
      <div className="row gx-3">
        <div className="posts-container col-lg-8">
          {postCards.map((postCard) => (
            <PostCard
              key={postCard.id}
              blogTitle={blogTitle}
              handleReadTime={handleReadTime}
              cardData={postCard}
            ></PostCard>
          ))}
        </div>
        <div className="col-lg-4">
          <ReadTime arr={arr} readTime={readTime}></ReadTime>
        </div>
      </div>
      <hr />
      <Questions></Questions>
    </div>
  );
};

export default Body;
