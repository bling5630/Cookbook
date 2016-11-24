main = do 
	print $ foldr (\x y -> concat ["(",x,"+",y,")"]) "0" (map show [1..13])
	print $ foldl (\x y -> concat ["(",x,"+",y,")"]) "0" (map show [1..13])
