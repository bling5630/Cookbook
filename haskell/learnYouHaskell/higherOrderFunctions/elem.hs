($$) :: (a -> b) -> a -> b
($$) f x = f x

elem' :: (Eq a) => a -> [a] -> Bool  
elem' y ys = foldl (\acc x -> if x == y then True else acc) False ys  

