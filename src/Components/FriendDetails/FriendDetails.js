import React from "react";
import { useLoaderData } from "react-router-dom";
import "./FriendDetails.css";

const FriendDetails = () => {
  const friend = useLoaderData();
  return (
    <div className="details">
      <h1>Details About: {friend.name}</h1>
      <p>Call him/her: {friend.phone}</p>
      <p>Website: {friend.website}</p>
      <p>Address: {friend.address?.city}</p>
      <p>Company: {friend.company?.name}</p>
      <h2>Everything you need to know about this person</h2>
    </div>
  );
};

export default FriendDetails;
