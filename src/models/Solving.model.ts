import type { User } from './User.model';

export interface Solving {
	id: Number;
	user: User;
	date: String;
	difficulty: String;
	title: String;
	url: String;
}
