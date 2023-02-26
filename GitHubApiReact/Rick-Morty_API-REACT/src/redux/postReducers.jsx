import * as actions from '../actions/postsActions.jsx';

export const initialState = {
    posts: [],
    succes: false
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_POSTS:
        return { ...state, success: false };
      case actions.GET_POSTS_SUCCESS:
        return { posts: action.payload, success: true };
      default:
        return state;
    }
  }
