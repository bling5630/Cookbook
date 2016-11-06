take' :: (Num i, Ord i) => i -> [a] -> [a]
take' n _
    | n <= 0   = []
take' _ []     = []
take' n (x:xs) = x : take' (n-1) xs

main = do
    print(take 5 [5,4,3,2,1])
    print(take 4 [5,4,3,2,1])
    print(take 3 [5,4,3,2,1])
    print(take 2 [5,4,3,2,1])
    print(take 1 [5,4,3,2,1])
    print(take 0 [5,4,3,2,1])
    print(take 3 [4,3,2,1])
