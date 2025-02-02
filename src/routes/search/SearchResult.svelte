<script>
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchSearchResult } from '../client';
	import Loading from '$lib/components/loading.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';

	let { searchTerm } = $props();
	const query = $derived(
		createQuery({
			queryKey: ['search', $searchTerm],
			queryFn: async () => await fetchSearchResult($searchTerm),
			enabled: $searchTerm.length > 0
		})
	);
</script>

{#if $query.isLoading}
	<div class="loading-container">
		<Loading />
	</div>
{:else if $query.isError}
	<p>Error: {$query.error.message}</p>
{:else}
	<div>
		{#each $query.data.articles as article}
			<NewsCard {...article} />
		{/each}
	</div>
{/if}

<style>
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
