import React from "react";

const Comment = props => (
  <li>
    <div className="list_image">
      <div className="image_sec">
        <img src={`http://192.168.100.171:5000/assets/${props.comment.picture}`} />
      </div>
      <div className="image_name">{props.comment.name}</div>
    </div>
    <div className="list_info">{props.comment.body}</div>
    <input type="button" value="Reply" className="orng_btn" />
  </li>
);

export default Comment;
