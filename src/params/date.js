/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(param);
}
