<script lang="ts">
	import type { Article } from '$lib/types/article';

	let article: Article = $props();

	function formatDate(date: string): string {
		return new Date(date).toLocaleDateString(undefined, {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	}
</script>

<article
	class="m-4 flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:bg-gray-900 dark:shadow-gray-700/25 sm:flex-row"
>
	<img
		alt={article.title + ' image'}
		src={article.urlToImage}
		loading="lazy"
		class="flex h-48 w-full items-center justify-center bg-gray-300 object-cover text-center text-gray-600 dark:text-gray-400 sm:h-auto sm:w-1/3"
	/>

	<div class="p-4 sm:m-4 sm:w-2/3 sm:p-6">
		<time datetime={article.publishedAt} class="block text-xs text-gray-500 dark:text-gray-400">
			{formatDate(article.publishedAt)}
		</time>

		<a href={article.url} target="_blank" rel="noopener noreferrer">
			<h3 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
				{article.title}
			</h3>
		</a>

		<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
			By {article.author} | Source: {article.source.name}
		</p>

		{#if article.description}
			<p class="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
				{article.description}
			</p>
		{/if}

		{#if article.content}
			<p class="mt-3 hidden text-sm text-gray-500 dark:text-gray-400 sm:block">
				{@html article.content}
			</p>
		{/if}
	</div>
</article>
