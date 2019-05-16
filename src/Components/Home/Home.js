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
    this.onUpvote = this.onUpvote.bind(this);
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
    API.post("ideas", "/ideas", {
			body: idea
		}).then(res => {
      const newIdeas = this.state.ideas.concat(res);
      this.setState({ideas: newIdeas})
    })
  }

  onUpvote(e, idea) {
    //update idea in api
    //update idea in state
    e.preventDefault();
    const newIdeas = this.state.ideas.map(newIdea => {
      if(newIdea.id === idea.id) {
        newIdea.upvotes = newIdea.upvotes + 1;
      }
      return newIdea
    })

    this.setState({ideas: newIdeas});
    
  }

  render() {
    return (
      <div className="Home">
        <IdeaInput onSubmit={this.onSubmitIdea} />
        <Search />
        <IdeaList ideas={this.state.ideas} onUpvote={this.onUpvote} />
      </div>
    );
  }

}
