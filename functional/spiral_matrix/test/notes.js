
/*
@bling5630 as a note, if you find yourself using the
indices of an array as an integral part of the logic,
there's usually a better way to do what you want.
You almost never need to use the actual indices of an array,
and your code becomes simpler when you move away from that.
Not ramda, but the idea should be transferable:
*/

λ: let transpose' = foldr (zipWith (:)) (repeat [])
λ: transpose' [[1,2,3,4], [5,6,7,8]]
[[1,5],[2,6],[3,7],[4,8]]
λ: transpose' [[1,2,3,4], [5,6,7,8], [9,10,11,12]]
[[1,5,9],[2,6,10],[3,7,11],[4,8,12]]
λ: transpose' [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]
[[1,5,9,13],[2,6,10,14],[3,7,11,15],[4,8,12,16]]

//joneshf Dec 20 16:55

function transpose(xs) {
  const shortest = Math.min.apply(null, R.map(R.length, xs));
  return R.reduce(R.zipWith(R.flip(R.append)), R.repeat([], shortest), xs);
}

/*
CrossEye Dec 20 17:27
Saw the Haskell, went to try it in JS. Found I'm beat to it.
Mine was similar, though:
*/

var transpose = R.lift(R.reduce(R.zipWith(R.flip(R.append))))(
   R.pipe(R.map(R.length), R.apply(Math.min), R.repeat([])), R.identity
);

/*
Several variants (including old ones from #1526 and
earlier discussions) are at http://bit.ly/1YpsALP
Using shortest:
*/

var transpose = R.lift(R.reduce(R.zipWith(R.flip(R.append))))(
  R.compose(R.repeat([]), shortest),
  R.identity
);
