($$) :: (a -> b) -> a -> b
($$) f x = f x

-- addThree :: (Num a) => a -> a -> a -> a  
-- addThree x y z = x + y + z

addThree :: (Num a) => a -> a -> a -> a  
addThree = \x -> \y -> \z -> x + y + z  

main = print $ addThree 1 2 3