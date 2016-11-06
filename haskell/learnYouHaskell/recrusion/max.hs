maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs) = max x (maximum' xs)

main = do
  print(maximum [2,4])
  print(maximum [1])
  print(maximum [0])
  -- print(maximum [])
