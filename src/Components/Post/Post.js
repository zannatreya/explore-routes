import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <p>{title}</p>
      <p>
        <small>{body}</small>
      </p>
      {/* <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link> */}
      <button onClick={handleNavigate}>Show Details:{id}</button>
    </div>
  );
};

export default Post;
