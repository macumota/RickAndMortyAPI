export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPost = () => ({
  type: GET_POSTS,
});

export const changeStatePosts = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export function getDataApi() {
  return async (dispatch) => {
    dispatch(getPost());
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      console.log(data);
      dispatch(changeStatePosts(data));
    } catch (error) {}
  };
}
