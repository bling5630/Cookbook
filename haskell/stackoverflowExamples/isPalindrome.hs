-- isPalindrome :: [a] -> Bool
-- isPalindrome xs = case xs of 
--                         [] -> True 
--                         [x] -> True
--                         a -> (last a) == (head a) && (isPalindrome (drop 1 (take (length a - 1) a)))

-- main = do
--     print (show (isPalindrome "blaho"))

isPalindrome :: Eq a => [a] -> Bool
isPalindrome xs = case xs of 
                        [] -> True 
                        [x] -> True
                        a -> (last a) == (head a) && (isPalindrome (drop 1 (take (length a - 1) a)))

main = do
    print (show (isPalindrome "blaho"))

-- By the way, there is a much simpler way to implement this function using reverse
-- join (+) 2 = 4. But isPalindrome xs = xs == reverse xs 