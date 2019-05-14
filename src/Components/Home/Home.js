import React, { Component } from 'react';
import './Home.scss';

import IdeaInput from '../IdeaInput/IdeaInput';
import Search from '../Search/Search';
import IdeaList from '../IdeaList/IdeaList';
import { API } from "aws-amplify";

// import ideas from '../../Data/ideas';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: []
    };
  }

  async componentWillMount() {
    try {
      const ideas = await this.ideas();
      this.setState({ ideas });
    } catch (e) {
      alert(e);
    }
  }

  ideas() {
    return API.get("ideas", "/ideas");
  }

  render() {
    return (
      <div className="Home">
        <IdeaInput />
        <Search />
        <IdeaList ideas={this.state.ideas} />
      </div>
    );
  }

}
