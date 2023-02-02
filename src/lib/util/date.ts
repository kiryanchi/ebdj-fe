import { match as isDate } from '../../params/date';

export function getToday() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const date = String(today.getDate()).padStart(2, '0');

	return new DDate(`${year}-${month}-${date}`);
	// return `${year}-${month}-${date}`;
}

export class DDate extends Date {
	constructor(dateString: string) {
		if (!isDate(dateString)) throw '올바른 date 형식이 아닙니다.';

		const [year, month, date] = dateString.split('-');
		super(Number(year), Number(month), Number(date));
	}
	toString = (): string => {
		const year = this.getFullYear();
		const month = String(this.getMonth()).padStart(2, '0');
		const date = String(this.getDate()).padStart(2, '0');
		return `${year}-${month}-${date}`;
	};
}
