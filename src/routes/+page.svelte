<script lang="ts">
	import NewsCard from '$lib/components/NewsCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div>
	{#each data.articles as article}
		<NewsCard {...article} />
	{/each}
</div>
