import React from 'react';
import './Home.scss';
import Random from '../../components/Random/Random.jsx';
import Search from '../../components/Search/Search.jsx';

const Home = () => {
  return (
    <div className='home'>
        <Search />
        <Random />
    </div>
  )
}

export default Home;