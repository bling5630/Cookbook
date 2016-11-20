($$) :: (a -> b) -> a -> b
($$) f x = f x

map' :: (a -> b) -> [a] -> [b]  
map' f tail = foldr (\head acc -> f head : acc) [] tail  

main = print $ map (+3) [1,2,3]