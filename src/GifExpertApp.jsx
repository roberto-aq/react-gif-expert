import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Naruto']);

	const onAddCategory = newCategory => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<div>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={e => onAddCategory(e)} />

			{categories.map(category => {
				return <GifGrid key={category} category={category} />;
			})}
		</div>
	);
};

export default GifExpertApp;
