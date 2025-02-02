import axios from 'axios';

export async function fetchTopHeadlines() {
	try {
		const response = await axios.get('http://localhost:5173/api/articles/headlines');
		return response.data;
	} catch (error) {
		console.error('Error fetching articles:', error);
		if (axios.isAxiosError(error)) {
			console.error('API Error:', error.response?.data?.message || 'Unknown error');
		} else {
			console.error('Unexpected error:', error);
		}
	}
}

export async function fetchSearchResult(query: string, category: string) {
	try {
		const response = await axios.get(`http://localhost:5173/api/articles/search?query=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching articles:', error);
		if (axios.isAxiosError(error)) {
			console.error('API Error:', error.response?.data?.message || 'Unknown error');
		} else {
			console.error('Unexpected error:', error);
		}
	}
}
