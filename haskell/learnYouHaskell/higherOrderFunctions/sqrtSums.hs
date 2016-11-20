($$) :: (a -> b) -> a -> b
($$) f x = f x

sqrtSums :: Int  
sqrtSums = length (takeWhile (<1000) (scanl1 (+) (map sqrt [1..]))) + 1  

main = do
	print $ sqrtSums
	print $ sum (map sqrt [1..131]) 
	print $ sum (map sqrt [1..130])
