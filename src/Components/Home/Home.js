import React from 'react';
import './Home.scss';

import IdeaInput from '../IdeaInput/IdeaInput';
import Search from '../Search/Search';
import IdeaList from '../IdeaList/IdeaList';
import ideas from '../../Data/ideas';

//TODO: Will need to change this to a stateful component when db is set up and fetch data in componentWillMount function
const Home = () => {
  return (
    <div className="Home">
      <IdeaInput />
      <Search />
      <IdeaList ideas={ideas} />
    </div>
  );
}

export default Home;