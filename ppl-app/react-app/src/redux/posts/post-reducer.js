import { PostActions } from "./post-actions";

const INITIAL_STATE = {
  posts: []
};

const PostReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case PostActions.SET_POSTS:
      return {
        ...state,
        posts: actions.payload
      };

    default:
      return state;
  }
};

export default PostReducer;
