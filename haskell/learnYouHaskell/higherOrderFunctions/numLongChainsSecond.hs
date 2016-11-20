($$) :: (a -> b) -> a -> b
($$) f x = f x

numLongChains :: Int  
numLongChains = length (filter (\xs -> length xs > 15) (map chain [1..100])) 

chain :: (Integral a) => a -> [a]  
chain 1 = [1]  
chain n  
    | even n =  n:chain (n `div` 2)  
    | odd n  =  n:chain (n*3 + 1)
    
main = print numLongChains