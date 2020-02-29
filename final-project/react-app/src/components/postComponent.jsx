import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  return (
    <div className="contnt_2">
      <div className="div_a">
        <div className="div_title">{props.post.title}</div>
        <div className="btm_rgt">
          <div className="btm_arc">{props.post.tag}</div>
        </div>
        <div className="div_top">
          <div className="div_top_lft">
            <img src="/images/img_6.png" />
            {props.post.userName}
          </div>
          <div className="div_top_rgt">
            <span className="span_date">{props.post.date}</span>
            <span className="span_time">{props.post.time}</span>
          </div>
        </div>
        <div className="div_image">
          <Link to={`/posts/${props.post._id}`}>
            <img
              src={`http://localhost:5000/uploads/${props.post.picture}`}
              alt="pet"
            />
          </Link>
        </div>
        <div className="div_btm">
          <div className="btm_list">
            <ul>
              <li>
                <a href="#">
                  <span className="btn_icon">
                    <img src="/images/icon_001.png" alt="share" />
                  </span>
                  Share
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="btn_icon">
                    <img src="/images/icon_002.png" alt="share" />
                  </span>
                  Flag
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="btn_icon">
                    <img src="/images/icon_003.png" alt="share" />
                  </span>
                  {props.post.likes} Likes
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="btn_icon">
                    <img src="/images/icon_004.png" alt="share" />
                  </span>
                  {props.post.comments} Comments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
