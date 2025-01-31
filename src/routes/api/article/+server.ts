import type { Article } from '$lib/types/article';
import axios from 'axios';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';

export const GET: RequestHandler = async () => {
	try {
		const response = await axios.get(
			`https://newsapi.org/v2/top-headlines?category=general&apiKey=${API_KEY}`
		);
		const articles: Article[] = response.data.articles;
		return json({
			status: response.data.status,
			totalResults: response.data.totalResults,
			articles
		});
	} catch (error) {
		console.error('Error fetching articles:', error);
		if (axios.isAxiosError(error)) {
			return json(
				{
					message: error.response?.data?.message || 'An error occurred with the request'
				},
				{ status: error.response?.status }
			);
		}
		return json({ message: 'An unexpected error occurred' }, { status: 500 });
	}
};
