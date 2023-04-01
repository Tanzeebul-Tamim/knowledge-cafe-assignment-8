import React from "react";

const PostCard = ({cardData}) => { 
  return (
    <div className="mb-5">
      <hr />
      <br />
      <img style={{ height: "450px", width: "820px" }} className="rounded-4" src={cardData.cover_image}/>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-center gap-3">
          <img
            style={{ height: "60px", width: "60px" }}
            className="rounded-circle"
            src={cardData.author_image}
            alt=""
          />
          <div className="name-date">
            <p className="h5 fw-bold">{cardData.author_name}</p>
            <p style={{ color: "#606060" }} className="h6">
              {cardData.post_date} ({cardData.days_ago} days ago)
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 read-time">
          <p style={{ color: "#606060" }} className="h5">
            {cardData.read_time} min read
          </p>
          <i style={{ color: "#606060" }} class="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="fw-bold h1">
          {cardData.title}
        </h1>
      </div>
      <p style={{ color: "#606060" }} className="h5 my-3">
        {cardData.hashtags}
      </p>
      <a style={{ textDecoration: "underline" }} className="h5 fw-bold" href="">
        Mark as read
      </a>
    </div>
  );
};

export default PostCard;
