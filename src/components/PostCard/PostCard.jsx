import React from "react";
import './PostCard.css';

const PostCard = ({cardData, handleReadTime}) => { 

  const handleBookmark = id => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const postCard = {id};

  }

  return (
    <div>
      <img className="rounded-4 cover img-fluid w-100" src={cardData.cover_image}/>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-center gap-3">
          <img className="rounded-circle author-image" src={cardData.author_image}/>
          <div className="name-date">
            <p className="h5 fw-bold">{cardData.author_name}</p>
            <p className="h6 date">{cardData.post_date} ({cardData.days_ago} days ago)</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="h5 read-time">
            {cardData.read_time} min read
          </p>
          <button className="h5 mark" href=""><i onClick={() => handleBookmark (cardData.id)} title="Bookmark this post" class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="fw-bold h1">
          {cardData.title}
        </h1>
      </div>
      <p className="h5 my-3 hashtag">
        {cardData.hashtags}
      </p>
      <button onClick={() => handleReadTime (cardData.read_time)} className="h5 fw-bold mark" href="">
        Mark as read
      </button>
      <hr className="mb-5"/>
    </div>
  );
};

export default PostCard;
