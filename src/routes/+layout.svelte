<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import { PersistQueryClientProvider } from '@tanstack/svelte-query-persist-client';
	import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
	import Header from '$lib/components/header.svelte';

	let { data, children } = $props();

	const persister = createSyncStoragePersister({
		storage: browser ? window.localStorage : null
	});
</script>

<Header />
<PersistQueryClientProvider client={data.queryClient} persistOptions={{ persister }}>
	<main>
		{@render children()}
	</main>
	<SvelteQueryDevtools />
</PersistQueryClientProvider>
