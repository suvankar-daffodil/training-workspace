import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Comment from "./comment";
import { apiRequests } from "../API_REQUESTS";
import { PostActions } from "../redux/posts/post-actions";

const CommentBox = props => {
  const { setPosts } = props;

  const updatePostData = async (post, commentBody) => {
    post.comments.push({
      name: `${props.currentUser.firstname} ${props.currentUser.lastname}`,
      body: commentBody,
      picture: props.currentUser.picture
    });
    try {
      let response = await apiRequests.UPDATE_POST_BY_ID(post);
      if (response) {
        let result = await apiRequests.FETCH_ALL_POSTS();
        if (result) setPosts(result.data.reverse());
      }
    } catch (error) {
      console.log(error);
    }
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
                  let commentBody = new FormData(e.target).get("body");
                  updatePostData(props.post, commentBody);
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
          <Link to="#">View more</Link>
        </div>
      ) : null}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(null, mapDispatchToProps)(CommentBox);
