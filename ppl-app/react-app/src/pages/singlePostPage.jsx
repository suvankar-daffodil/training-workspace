import React from "react";
import { connect } from "react-redux";

import Post from "../components/postComponent";
import CommentBox from "../components/commentBoxComponent";
import { PostActions } from "../redux/posts/post-actions";

const getPostById = (posts, postId) => {
  return posts.filter(post => post._id === postId)[0];
};

const SinglePostPage = props => {
  const { posts, updatePostData } = props;

  const post = getPostById(posts, props.match.params.postId);

  return post ? (
    <div className="container">
      <div className="content">
        <Post key={post._id} post={post} updatePostData={updatePostData} />
        <CommentBox post={post} {...props} />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = ({ currentUser, posts }) => ({
  currentUser: currentUser.currentUser,
  posts: posts.posts
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostPage);
