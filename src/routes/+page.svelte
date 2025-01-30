<script>
	import NewsCard from '$lib/components/NewsCard.svelte';
	let data = {
		source: {
			id: null,
			name: 'Digital Journal'
		},
		author: 'AFP',
		title: 'EU holds auto talks to revive embattled car sector',
		description:
			'EU talks to relaunch Europe’s embattled car industry are to get underway on Thursday, with automotive CEOs awaited in Brussels to discuss fines and competition from China. The European Union is under pressure to help a sector that employs 13 million people an…',
		url: 'https://www.digitaljournal.com/world/eu-holds-auto-talks-to-revive-embattled-car-sector/article',
		urlToImage:
			'https://www.digitaljournal.com/wp-content/uploads/2025/01/4ac519b23d79a1d767d59398ea0dffb0cddfedc4.jpg',
		publishedAt: '2025-01-30T08:47:35Z',
		content:
			"The German union IG Metall reached an agreement with Volkswagen on a cost-cutting plan to avoid forced redundancies at Europe's largest carmaker's production sites in Germany - Copyright AFP Kirill K… [+4825 chars]"
	};
</script>

<NewsCard {...data} />
