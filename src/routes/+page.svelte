<script lang="ts">
	import NewsCard from '$lib/components/NewsCard.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchTopHeadlines } from './client';

	const query = createQuery({
		queryKey: ['posts'],
		queryFn: async () => await fetchTopHeadlines()
	});
</script>

{#if $query.isLoading}
	<p>Loading...</p>
{:else if $query.isError}
	<p>Error: {$query.error.message}</p>
{:else}
	<div>
		{#each $query.data.articles as article}
			<NewsCard {...article} />
		{/each}
	</div>
{/if}
