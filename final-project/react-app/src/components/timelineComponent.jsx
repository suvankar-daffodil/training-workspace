import React from "react";
import Axios from "axios";

import Post from "./postComponent";

const Timeline = props => {
  const { posts, filterTag } = props;
  const filteredPosts = posts.filter(post => {
    if (filterTag)
      return filterTag.toLowerCase().includes(post.tag.toLowerCase());
    return post.tag.toLowerCase().includes(filterTag.toLowerCase());
  });
  if (filteredPosts.length > 0)
    return filteredPosts.map(post => (
      <Post key={post._id} post={post} {...props} />
    ));
  else return <></>;
};

export default Timeline;
