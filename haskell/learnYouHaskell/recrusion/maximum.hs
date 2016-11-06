maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs)
    | x > maxTail = x
    | otherwise = maxTail
    where maxTail = maximum' xs
main =  do
  print(maximum [2,3,4, 1,2,3,4,55,5,7643,43254325,1,2,3,4,5,6,7,8,9])
  print(maximum [1,2])
  print(maximum [9])
  -- print(maximum [9]) ???
