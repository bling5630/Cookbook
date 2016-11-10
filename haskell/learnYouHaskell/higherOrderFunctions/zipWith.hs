zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys


main = do
  print(zipWith' (+) [4,2,5,6] [2,6,2,3])
  print(zipWith' (++) ["foo ", "bar ", "baz "] ["fighters", "hoppers", "aldrin"])
  print(zipWith' (zipWith' (*)) [[1,2,3],[3,5,6],[2,3,4]] [[3,2,2],[3,4,5],[5,4,3]])
