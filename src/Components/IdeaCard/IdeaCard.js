import React from 'react';
import { NavLink } from 'react-router-dom';
import './IdeaCard.scss';

import UpvoteIcon from '../../Icons/UpvoteIcon';
import CommentIcon from '../../Icons/CommentIcon';



const IdeaCard = ({idea, onUpvote}) => {
	const pathname = `/ideas/${idea.id}`;

	return (
		<NavLink className='idea-card' to={{pathname, selectedIdea: idea}}>
			<div className='idea-card__title'>{idea.title}</div>
			<div className='idea-card__body'>{idea.body}</div>
			<div className='idea-card__stats'>
				<div className='idea-card__upvotes'>
					<div className='idea-card__upvote-icon-container' onClick={(e) => onUpvote(e, idea)}>
						<UpvoteIcon className='idea-card__upvote-icon' />
					</div>
					<div className='idea-card__upvote-count'>{idea.upvotes}</div>
				</div>
				<div className='idea-card__comments'>
					<CommentIcon className='idea-card__comment-icon' />
					<div className='idea-card__comment-count'>{idea.comments.length}</div>
				</div>
			</div>
		</NavLink>
	);
}

export default IdeaCard;