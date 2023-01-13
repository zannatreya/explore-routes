import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { id, name, email, username } = friend;
  return (
    <div className="friend">
      <h1>Name:{name}</h1>
      <h3>Email:{email}</h3>
      <h4>
        Username: <Link to={`/friend/${id}`}>{username}</Link>
      </h4>
    </div>
  );
};

export default Friend;
