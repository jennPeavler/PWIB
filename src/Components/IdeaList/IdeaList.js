import React from 'react';
import './IdeaList.scss';

import IdeaCard from '../IdeaCard/IdeaCard';

const IdeaList = ({ideas}) => {
	const ideaList = ideas.sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0).map(idea => <IdeaCard key={idea.id} idea={idea} />);
	return (
		<div className='idea-list'>
			{ideaList}
		</div>
	);
}

export default IdeaList;