import { getToday } from '$lib/util/date';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad<void> = () => {
	throw redirect(302, `/${getToday()}`);
};
