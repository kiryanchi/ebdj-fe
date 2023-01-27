import { redirect } from '@sveltejs/kit';
import { getToday } from '$lib/util/date';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log(getToday());
    throw redirect(303, `/${getToday()}`);
}