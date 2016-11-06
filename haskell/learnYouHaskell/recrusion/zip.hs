zip' :: [a] -> [b] -> [(a,b)]
zip' _ [] = []
zip' [] _ = []
zip' (x:xs) (y:ys) = (x,y):zip' xs ys

main = print(zip [1,2,3,4,5] [6,7,8,9])

-- [(1,6),(2,7),(3,8),(4,9)]
