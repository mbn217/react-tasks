import React from "react";
import "./PostCard.css";

const PostCard = ({ title, content, number }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        {number && <span className="post-number">{number}</span>}
        <h2 className="post-title">{title}</h2>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
