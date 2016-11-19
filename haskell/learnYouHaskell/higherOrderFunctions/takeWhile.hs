($$) :: (a -> b) -> a -> b
($$) f x = f x

main = do 
	print $ sum (takeWhile (<10000) (filter odd (map (^2) [1..]))) 
	print $ sum (takeWhile (<10000) [n^2 | n <- [1..], odd (n^2)])  