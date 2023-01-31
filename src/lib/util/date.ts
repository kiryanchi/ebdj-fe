export function getToday() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const date = String(today.getDate()).padStart(2, '0');

	return new DDate(year, Number(month), Number(date));
	// return `${year}-${month}-${date}`;
}

export class DDate extends Date {
	year: number;
	month: number;
	date: number;

	constructor(year: number, month: number, date: number) {
		super(year, month, date);

		this.year = year;
		this.month = month;
		this.date = date;
	}

	toString(): string {
		return `${this.year}-${String(this.month).padStart(2, '0')}-${String(this.date).padStart(
			2,
			'0'
		)}`;
	}
}
