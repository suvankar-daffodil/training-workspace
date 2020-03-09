import React from "react";

import Post from "./postComponent";

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

export default Timeline;
