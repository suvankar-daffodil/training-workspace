import React from "react";
import Axios from "axios";

import Post from "./postComponent";

const Timeline = props => {
  const { posts, filterTag } = props;
  const filteredPosts = posts.filter(post =>
    post.tag.toLowerCase().includes(filterTag.toLowerCase())
  );
  if (filteredPosts.length > 0)
    return filteredPosts.map(post => <Post post={post} />);
  else return <></>;
};

export default Timeline;
