<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchSearchResult } from '../client';
	import Loading from '$lib/components/loading.svelte';
	import NewsCard from '$lib/components/NewsCard.svelte';

	let searchTerm = $state<string>('');
	let category = $state<string>('general');

	const query = $derived(
		createQuery({
			queryKey: ['search', searchTerm, category],
			queryFn: async () => await fetchSearchResult(searchTerm, category),
			enabled: searchTerm.length > 0
		})
	);

	const handleSubmit = (event: Event) => {
		event.preventDefault();
	};
</script>

<div class="container mx-auto w-full max-w-7xl bg-gray-900 p-8 shadow-2xl">
	<form class="space-y-8" onsubmit={handleSubmit}>
		<h1 class="text-center text-4xl font-extrabold text-white sm:text-5xl">Find the latest news</h1>
		<p class="mx-auto max-w-xl text-center text-lg text-gray-300">
			Enter keywords to search for the latest articles, or choose a category to browse news by
			topics.
		</p>
		<div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-4">
			<input
				type="text"
				bind:value={searchTerm}
				placeholder="Search news articles"
				class="w-full flex-grow rounded-lg border-2 border-gray-300 bg-gray-800 px-5 py-3 text-gray-100 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
			/>
			<div class="flex items-center space-x-4">
				<select
					id="category"
					bind:value={category}
					class="rounded-lg border-2 border-gray-300 bg-gray-800 px-4 py-3 text-gray-100 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
				>
					<option value="general">General</option>
					<option value="technology">Technology</option>
					<option value="sports">Sports</option>
					<option value="business">Business</option>
					<option value="entertainment">Entertainment</option>
					<option value="health">Health</option>
				</select>
				<button
					type="submit"
					class="rounded-lg bg-indigo-600 px-8 py-3 text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Search
				</button>
			</div>
		</div>
	</form>
</div>

{#if $query.isLoading}
	<div class="loading-container">
		<Loading />
	</div>
{:else if $query.isError}
	<p>Error: {$query.error.message}</p>
{:else if $query.data}
	<div>
		{#each $query.data.articles as article}
			<NewsCard {...article} />
		{/each}
	</div>
{:else}
	<p class="text-center text-lg text-gray-300">
		No articles found matching your search criteria. Please try different keywords or categories.
	</p>
{/if}

<style>
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
