import { API_SERVER } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { Solving } from '../../models/Solving.model';

type OutputType = {
	solvingByUser: Map<string, Array<Solving>>;
	date: string;
};

interface UserSolving {
	name: string;
	solving: Solving | null;
}

export const load: PageServerLoad<OutputType> = async ({ params, fetch }) => {
	const userSolving: UserSolving[] = await (
		await fetch(`${API_SERVER}/api/solving/check?date=${params.date}`, {
			method: 'GET'
		})
	).json();

	const solvingByUser = new Map<string, Array<Solving>>();

	userSolving.map((val) => {
		if (!solvingByUser.get(val.name)) {
			solvingByUser.set(val.name, []);
		}
		if (val.solving) {
			solvingByUser.get(val.name)!.push(val.solving);
		}
	});

	return {
		solvingByUser,
		date: params.date
	};
};
