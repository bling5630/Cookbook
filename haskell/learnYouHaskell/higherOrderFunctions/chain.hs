($$) :: (a -> b) -> a -> b
($$) f x = f x

chain :: (Integral a) => a -> [a]  
chain 1 = [1]  
chain n  
    | even n =  n:chain (n `div` 2)  
    | odd n  =  n:chain (n*3 + 1) 

main  = do
	print $ chain 10
	print $ chain 1
	print $ chain 30
	print $ chain 90
	print $ chain 100