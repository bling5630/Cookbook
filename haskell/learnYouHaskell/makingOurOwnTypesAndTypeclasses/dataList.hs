data List a = Empty | Cons a (List a) deriving (Show, Read, Eq, Ord) 


main = do
	print $ (Empty :: List Int)
	print $ 4 `Cons` (5 `Cons` Empty)
	print $ 5 `Cons` Empty 
	print $ 3 `Cons` (4 `Cons` (5 `Cons` Empty))

