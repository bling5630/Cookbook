-- 1 Problem 11
-- (*) Modified run-length encoding.
-- Modify the result of problem 10 in 
-- such a way that if an element has no 
-- duplicates it is simply copied into 
-- the result list. Only elements with 
-- duplicates are transferred as (N E) lists.

import Data.List

encode [] = []
encode (x:xs) = (length $ x : takeWhile (==x) xs, x)
                 : encode (dropWhile (==x) xs)

data ListItem a = Single a | Multiple Int a
    deriving (Show)
 
encodeModified :: Eq a => [a] -> [ListItem a]
encodeModified = map encodeHelper . encode
    where
      encodeHelper (1,x) = Single x
      encodeHelper (n,x) = Multiple n x

main = do 
	print $ encodeModified "aaaabccaadeeee"