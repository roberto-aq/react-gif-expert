export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=dbm3ssmsMpzO3RmemysXjn0C5qX410r9&q=${category}&limit=10`;

	const res = await fetch(url);
	const { data } = await res.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

    return gifs
};