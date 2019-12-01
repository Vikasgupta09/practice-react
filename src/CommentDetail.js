import React from "react";
import faker from "faker";

const CommentDetail = props => {
  let authorName = props.name;
  let datePosted = props.datePosted;
  let comment = props.comment;

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {authorName}
        </a>
        <div className="metadata">
          <span className="date">Today at {datePosted}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
