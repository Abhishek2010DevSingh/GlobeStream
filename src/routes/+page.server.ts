import type { PageServerLoad } from './$types';
import { API_KEY } from '$env/static/private';
import axios from 'axios';
import type { Article } from '$lib/types/article';

export const load: PageServerLoad = async () => {
	const response = await axios.get(
		`https://newsapi.org/v2/top-headlines?category=general&apiKey=${API_KEY}`
	);
	const articles: Article[] = response.data.articles;
	return { status: response.data.status, totalResults: response.data.totalResults, articles };
};
