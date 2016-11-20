($$) :: (a -> b) -> a -> b
($$) f x = f x

flip' :: (a -> b -> c) -> b -> a -> c  
flip' f = \x y -> f y x  
-- flip' :: (a -> b -> c) -> b -> a -> c  
-- flip' f y x = f x y 

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys

main = print $ flip zip [1,2,3,4,5] "hello"
