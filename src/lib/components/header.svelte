<script lang="ts">
	import logo from '$lib/images/logo.webp';
</script>

<header class="flex items-center justify-between gap-6 bg-gray-900 p-6 shadow-xl">
	<!-- Logo and title -->
	<div class="flex items-center gap-6">
		<img src={logo} alt="GlobeStream Logo" class="h-14 w-14 sm:h-16 sm:w-16" />
		<h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">GlobeStream</h1>
	</div>

	<!-- Search icon -->
	<a
		href="/search"
		aria-label="Search"
		class="rounded-full p-3 text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-7 w-7">
			<path
				fill-rule="evenodd"
				d="M14.745 13.467a8 8 0 1 0-1.266 1.266l4.85 4.85a1 1 0 1 0 1.414-1.414l-4.85-4.85zM16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
</header>
