import type { User } from './User.model';

export interface Solving {
	id: number;
	user: User;
	date: string;
	difficulty: string;
	title: string;
	url: string;
}
