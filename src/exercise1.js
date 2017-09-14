import { sum, mult, multBy10, multBy20 } from './math.js';

export const level3Function = (numbers) => {
	function getSum(total, num) {
 	   return total + num;
	}
	const [one, two, ...restOfNumbers] = numbers

	return {
		first: 20 * one,
		second: 20 * two,
		rest: restOfNumbers.map(item => item * 10)
	}
}