import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import Comment from "./commentComponent";

const CommentBox = props => {
  const updatePostData = (postId, commentBody) => {
    Axios.put(`http://localhost:5000/posts/${postId}`, {
      user: props.currentUser,
      body: commentBody
    })
      .then(response => {
        // fetchPosts().then(result => setPosts(result));
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="contnt_3">
        <ul>
          <li>
            <div className="cmnt_div1">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  let body = new FormData(e.target).get("body");
                  updatePostData(props.post._id, body);
                }}
              >
                <input
                  name="body"
                  type="text"
                  className="cmnt_bx1"
                  placeholder="Enter your Comment"
                />
                <input
                  type="submit"
                  className="sub_bttn1"
                  value="Submit Comment"
                />
              </form>
            </div>
          </li>
          {props.post.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </ul>
      </div>
      {props.post.comments.length > 1 ? (
        <div className="view_div">
          <Link href="#">View more</Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentBox;
