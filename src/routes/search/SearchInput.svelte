<script lang="ts">
	let searchInput = $state('');
	let { searchTerm } = $props();
	const handleSubmit = (event: Event) => {
		event.preventDefault();
		console.log(searchInput);
		searchTerm = searchInput;
	};
</script>

<div class="container mx-auto w-full max-w-7xl bg-gray-900 p-8 shadow-2xl">
	<form onsubmit={handleSubmit} class="space-y-8">
		<!-- Fixed typo here too -->
		<h1 class="text-center text-4xl font-extrabold text-white sm:text-5xl">Find the latest news</h1>
		<p class="mx-auto max-w-xl text-center text-lg text-gray-300">
			Enter keywords to search for the latest articles, or choose a category to browse news by
			topics.
		</p>
		<div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-4">
			<input
				type="text"
				bind:value={searchInput}
				placeholder="Search news articles"
				class="w-full flex-grow rounded-lg border-2 border-gray-300 bg-gray-800 px-5 py-3 text-gray-100 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
			/>
			<div class="flex items-center space-x-4">
				<select
					id="category"
					class="rounded-lg border-2 border-gray-300 bg-gray-800 px-4 py-3 text-gray-100 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300"
				>
					<option value="general" selected>General</option>
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
