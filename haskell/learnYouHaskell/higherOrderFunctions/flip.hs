($$) :: (a -> b) -> a -> b
($$) f x = f x

flip' :: (a -> b -> c) -> b -> a -> c  
flip' f y x = f x y  

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys



main = do 
	print (zipWith max [6,3,2,1] [7,3,1,5])
	print (zipWith (flip div) [2,2..] [10,8,6,4,2])
	print $ flip' zip [1,2,3,4,5] "hello"
	print $ flip' zip [9,8,7,6,5] "bello"