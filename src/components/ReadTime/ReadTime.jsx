import React, { useEffect, useState } from "react";
import Bookmarked from "../Bookmarked/Bookmarked";
import "./ReadTime.css";

const ReadTime = ({ readTime, arr }) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  return (
    <div className="fixed me-3">
      <div>
        <h1 className="h4 fw-bold readTime rounded-3 text-center">
          Spent time on reading : {time ? time : 0} min
        </h1>
      </div>
      <div>
        <Bookmarked arr={arr}></Bookmarked>
      </div>
    </div>
  );
};

export default ReadTime;
