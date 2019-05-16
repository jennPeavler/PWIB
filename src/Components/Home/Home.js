import React, { Component } from 'react';
import './Home.scss';

import IdeaInput from '../IdeaInput/IdeaInput';
import Search from '../Search/Search';
import IdeaList from '../IdeaList/IdeaList';
import { API } from "aws-amplify";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ideas: []
    };

    this.onSubmitIdea = this.onSubmitIdea.bind(this);
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

  onSubmitIdea(idea) {
    const newIdeas = this.state.ideas.concat(idea);
    this.setState({ideas: newIdeas})
  }

  render() {
    return (
      <div className="Home">
        <IdeaInput onSubmit={this.onSubmitIdea} />
        <Search />
        <IdeaList ideas={this.state.ideas} />
      </div>
    );
  }

}
