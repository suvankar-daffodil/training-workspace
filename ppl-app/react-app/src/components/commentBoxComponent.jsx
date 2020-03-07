import React from "react";

import Comment from "./commentComponent";
import FormInput from "./formInputComponent";

const CommentBox = props => {
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
                  props.updatePostData(props.post._id, body);
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
          <a href="#">View more</a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentBox;
