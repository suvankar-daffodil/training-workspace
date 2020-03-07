import React from "react";
import Axios from "axios";

import Post from "./postComponent";

const Timeline = props => {
  const { posts, selectedCategory } = props;
  const filteredPosts = posts.filter(post => {
    if (selectedCategory)
      return selectedCategory.toLowerCase().includes(post.tag.toLowerCase());
    return post.tag.toLowerCase().includes(selectedCategory.toLowerCase());
  });
  if (filteredPosts.length > 0)
    return filteredPosts.map(post => (
      <Post key={post._id} post={post} {...props} />
    ));
  else return <></>;
};

export default Timeline;
