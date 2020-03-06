import React from "react";

import Post from "../components/postComponent";
import SidePanel from "../components/profileSidePanel";
import CommentBox from "../components/commentBoxComponent";
import ProfileMain from "../components/profileMainComponent";

const getPostById = (posts, postId) => {
  return posts.filter(post => post._id === postId)[0];
};

const SinglePostPage = props => {
  let post = getPostById(props.posts, props.match.params.postId);

  return post ? (
    <div className="container">
      <div className="content">
        <ProfileMain>
          <Post
            key={post._id}
            post={post}
            updatePostData={props.updatePostData}
          />
          <CommentBox post={post} {...props} />
        </ProfileMain>
        {/* <SidePanel /> */}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SinglePostPage;
