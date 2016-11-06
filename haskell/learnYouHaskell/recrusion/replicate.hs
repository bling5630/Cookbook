replicate' :: (Num i, Ord i) => i -> a -> [a]
replicate' n x
    | n <= 0    = []
    | otherwise = x:replicate' (n-1) x

main = do
  print(replicate 10 11)
  print(replicate 0 0)
