<script lang="ts">
	import { page } from '$app/stores';
	import { getToday } from '$lib/util/date';
	import { getContext, hasContext, setContext } from 'svelte';
	import type { PageData } from './$types';
	import Calendar from './components/Calendar.svelte';

	const dateQuery = $page.url.searchParams.get('date');

	const date: String = dateQuery ? (dateQuery as String) : getToday();
</script>

<Calendar {date} />
