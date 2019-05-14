import React from 'react';
import './IdeaList.scss';

import IdeaCard from '../IdeaCard/IdeaCard';



const IdeaList = ({ideas}) => {
	const ideaList = ideas.map(idea => <IdeaCard key={idea.id} idea={idea} />);
	return (
		<div className='idea-list'>
			{ideaList}
		</div>
	);
}

export default IdeaList;