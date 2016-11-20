($$) :: (a -> b) -> a -> b
($$) f x = f x

sum' :: (Num a) => [a] -> a  
sum' tail = foldl (\acc head -> acc + head) 0 tail  

main = print $ sum [3,5,2,1]