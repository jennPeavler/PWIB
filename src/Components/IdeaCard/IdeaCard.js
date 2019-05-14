import React from 'react';
import './IdeaCard.scss';

import UpvoteIcon from '../../Icons/UpvoteIcon';
import CommentIcon from '../../Icons/CommentIcon';



const IdeaCard = ({idea}) => {
	return (
		<div className='idea-card'>
			<div className='idea-card__title'>{idea.title}</div>
			<div className='idea-card__body'>{idea.body}</div>
			<div className='idea-card__stats'>
				<div className='idea-card__upvotes'>
					<UpvoteIcon className='idea-card__upvote-icon' />
					<div className='idea-card__upvote-count'>{idea.upvotes}</div>
				</div>
				<div className='idea-card__comments'>
					<CommentIcon className='idea-card__comment-icon' />
					<div className='idea-card__comment-count'>{idea.comments.length}</div>
				</div>
			</div>
		</div>
	);
}

export default IdeaCard;