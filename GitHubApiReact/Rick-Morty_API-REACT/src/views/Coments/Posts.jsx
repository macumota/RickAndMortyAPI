import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataApi } from '../../actions/postsActions.jsx';
import Button from '../../components/Button/Button.jsx';
import './Posts.scss';

const Posts = ({ dispatch, posts, success }) => {
  useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);
  const renderPost = () => {
    if (success) {
      return posts.map((post, id) => {
        return (
          <div className='divPosts' key={id}>
            <h2 className='link'>{post.title}</h2>
            <p className='posts'>{post.body}</p>
          </div>
        );
      });
    }
  };
  return (
      <div className='divPost'>
        <Link to={'/'}><Button texto={'GO HOME'} /></Link>
        <h2 className='link'>Comentarios de nuestros usuarios: </h2>
        {renderPost()}
      </div>
  );
};
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  success: state.posts.success,
});
export default connect(mapStateToProps)(Posts);
