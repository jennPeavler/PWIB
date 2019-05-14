import React, { Component } from 'react';
import './IdeaInput.scss';

export default class IdeaInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: ''
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		return (
			<div className='idea-input'>
				<input className='idea-input__title' placeholder='Type idea title here...' onChange={(e) => this.onTitleChange(e)} />
				<textarea className='idea-input__body' placeholder='Type idea body here...' onChange={(e) => this.onBodyChange(e)} />
				<button className='idea-input__submit-btn' onClick={this.onSubmit} disabled={!this.state.title || !this.state.body}>Submit</button>
			</div>
		);
	}

	onTitleChange(e) {
		this.setState({title: e.target.value});
	}

	onBodyChange(e) {
		this.setState({body: e.target.value});
	}

	onSubmit() {
		//TODO: Will put data into db here
		//const title = this.state.title;
		//const body = this.state.body;
	}
}