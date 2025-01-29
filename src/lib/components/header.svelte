<script>
	import { Input } from '$lib/components/ui/input';
	import logo from '$lib/images/logo.webp';
</script>

<header
	class="flex flex-wrap items-center justify-between gap-4 rounded-md bg-gray-900 p-4 text-white shadow-md sm:flex-nowrap"
>
	<div class="flex items-center gap-4">
		<img src={logo} alt="Logo" class="h-10 w-10 sm:h-12 sm:w-12" />
		<h1 class="text-xl font-semibold tracking-tight sm:text-2xl">GlobeStream</h1>
	</div>
	<div class="relative flex w-full items-center sm:w-auto">
		<Input
			type="text"
			placeholder="Search news..."
			aria-label="Search news"
			class="w-full rounded-lg border border-gray-700 bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-64 md:w-80"
		/>
		<button class="absolute right-3 top-2 text-gray-500 focus:outline-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M14.745 13.467a8 8 0 1 0-1.266 1.266l4.85 4.85a1 1 0 1 0 1.414-1.414l-4.85-4.85zM16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</header>
