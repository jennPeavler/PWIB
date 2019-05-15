import React from 'react';
import './IdeaDetails.scss';

import UpvoteIcon from  '../../Icons/UpvoteIcon';

const IdeaDetails = (props) => {
	const idea = props.location.selectedIdea;
	
	let commentList = null;
	let commentLabel = 'There are no comments on this idea';
	if(idea && idea.comments && idea.comments.length) {
		commentList = idea.comments.map(comment => <div key={comment} className='idea-details__comment'>{comment}</div>);
		commentLabel = 'Comments'
	}

	return (
		<div className='idea-details'>
			<div className='idea-details__idea'>
				<div className='idea-details__title'>{idea.title}</div>
				<div className='idea-details__body'>{idea.body}</div>
				<div className='idea-details__upvotes'>
					<UpvoteIcon className='idea-details__upvote-icon' />
					<div className='idea-details__upvote-count'>{idea.upvotes}</div>
				</div>
			</div>
			<div className='idea-details__comments'>
				<div className='idea-details__comment-label'>{commentLabel}</div>
				{commentList}
			</div>
		</div>
	);
}

export default IdeaDetails;