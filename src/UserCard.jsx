import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt=""
        width="50"
        height="50"
        className="user-card-image"
      />

      <div>
        <div className="user-card-header">
          <h4>{user.login}</h4>
        </div>
        <p className="user-card-bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          placeat ad vel repudiandae. esse laudantium.
        </p>
      </div>
    </div>
  );
}
