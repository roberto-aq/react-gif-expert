import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const inputChange = e => {
		setInputValue(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (inputValue.trim().length < 1) return;
		// El setState también devuelve un callback para estados de arreglo
		setInputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='search'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={inputChange}
			/>
		</form>
	);
};

