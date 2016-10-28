const obj = { /* see above */ };
const optional1 = obj.optional1;

let gold = undefined;
if (optional1) {
	let optional2 = optional1.optional2;
	if (optional2) {
		let optional3 = optional2.optional3;
		if (optional3) {
			gold = optional3.gold;
		}
	}
}
