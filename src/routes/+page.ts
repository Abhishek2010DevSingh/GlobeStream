import type { PageLoad } from './$types';
import { fetchTopHeadlines } from './client';

export const load: PageLoad = async ({ parent }) => {
	const { queryClient } = await parent();
	await queryClient.prefetchQuery({
		queryKey: ['posts'],
		queryFn: async () => await fetchTopHeadlines()
	});
};
