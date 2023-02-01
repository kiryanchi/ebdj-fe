<script lang="ts">
	import { getToday } from '$lib/util/date';
	import '../app.css';

	const today = getToday();
</script>

<header class="bg-white mb-[8vh]">
	<nav class="flex flex-col justify-between items-center w-[92%] my-auto">
		<div class="mt-4">
			<h1 class="text-6xl w-auto">
				<a class="hover:text-black" href="/{today}">일백일준</a>
			</h1>
		</div>
		<div class="flex flex-row mt-4">
			<ul class="flex flex-row items-center gap-[4vw]">
				<li class="">
					<a class="hover:text-gray-500" href="/{today}">문제 풀이 현황</a>
				</li>
				<li class="">
					<a class="hover:text-gray-500" href="/help">도움말</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />
