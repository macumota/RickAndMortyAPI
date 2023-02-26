import { combineReducers } from 'redux';
import postsReducers from './postReducers.jsx';

const objectReducers = combineReducers({
    posts: postsReducers,
    //token o user
});

export default objectReducers;
