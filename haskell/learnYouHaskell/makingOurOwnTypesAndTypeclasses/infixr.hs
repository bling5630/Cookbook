infixr 5 :-:  
data List a = Empty | a :-: (List a) deriving (Show, Read, Eq, Ord)  

a = 3 :-: 4 :-: 5 :-: Empty 

main = do
	print $ 3 :-: 4 :-: 5 :-: Empty
	print $ 100 :-: a