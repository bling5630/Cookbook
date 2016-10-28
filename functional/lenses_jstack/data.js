const john = { /* see above */ };
const address = john.address;

let street = undefined;
if (address) {
	street = address.street;
}
