($$) :: (a -> b) -> a -> b
($$) f x = f x

listOfFuns = map (*) [0..] 

main = print $ (listOfFuns !! 4) 5