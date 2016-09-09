function numberSepaatedWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

console.log(numberSepaatedWithDots(2132643897612));
