{-infixr 5  ++ 
(++) :: [a] -> [a] -> [a]  
[]     ++ ys = ys  
(x:xs) ++ ys = x : (xs ++ ys) -}

infixr 5  .++  
(.++) :: List a -> List a -> List a   
Empty .++ ys = ys  
(x :-: xs) .++ ys = x :-: (xs .++ ys) 

a = 3 :-: 4 :-: 5 :-: Empty  
b = 6 :-: 7 :-: Empty  

main = print $ a .++ b