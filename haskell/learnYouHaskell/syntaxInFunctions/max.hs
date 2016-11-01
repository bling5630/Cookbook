max' :: (Ord a) => a -> a -> a
max' a b
    | a > b     = a
    | otherwise = b

maxInline' :: (Ord a) => a -> a -> a
maxInline' a b | a > b = a | otherwise = b

main = do
  print(max 21 12)
  print(maxInline' 210 11102)
