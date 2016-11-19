($$) :: (a -> b) -> a -> b
($$) f x = f x

largestDivisible :: (Integral a) => a  
largestDivisible = head (filter p [100000,99999..])  
    where p x = x `mod` 8565 == 0  

main = print $ largestDivisible