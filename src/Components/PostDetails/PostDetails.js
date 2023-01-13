import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, userId } = post;
  return (
    <div>
      <h2>Details about Post:{id}</h2>
      <p>{title}</p>
      <p>
        <small>{body}</small>
      </p>
      <Link to={`/friend/${userId}`}>Get the Author</Link>
    </div>
  );
};

export default PostDetails;
