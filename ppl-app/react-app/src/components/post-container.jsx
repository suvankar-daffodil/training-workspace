import React from "react";
import { connect } from "react-redux";

import { PostActions } from "../redux/posts/post-actions";
import Post from "./post";

const getFilteredPosts = (posts, selectedCategory) =>
  posts.filter(post =>
    selectedCategory
      ? selectedCategory.toLowerCase().includes(post.tag.toLowerCase())
      : post.tag.toLowerCase().includes(selectedCategory)
  );

const Timeline = props => {
  const { posts, selectedCategory } = props;
  const filteredPosts = getFilteredPosts(posts, selectedCategory);

  return filteredPosts?.map(post => (
    <Post key={post._id} post={post} {...props} />
  ));
};

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts
});

const mapDispatchToProps = dispatch => ({
  setPosts: posts => dispatch({ type: PostActions.SET_POSTS, payload: posts })
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
