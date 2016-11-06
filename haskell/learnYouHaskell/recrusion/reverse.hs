reverse' :: [a] -> [a]
reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

main = do
    print(reverse [1,2])
    print(reverse [2])
    print(reverse [1,2,3,4,5,6,7,8,9])
