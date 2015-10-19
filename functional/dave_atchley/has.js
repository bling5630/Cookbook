function has() {
  let args = [].slice.call(arguments);
  args.forEach((arg) => console.log(arg));
}
has(1,2,3,4);
// 1
// 2
// 3
// 4
