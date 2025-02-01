<script lang="ts">
	import NewsCard from '$lib/components/NewsCard.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchTopHeadlines } from './client';
	import Loading from '$lib/components/loading.svelte';

	const query = createQuery({
		queryKey: ['posts'],
		queryFn: async () => await fetchTopHeadlines()
	});
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
