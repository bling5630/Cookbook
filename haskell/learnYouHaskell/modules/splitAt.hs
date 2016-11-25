main = do
	print $ splitAt 1 "heyman"
	print $ splitAt 2 "heyman"
	print $ splitAt 3 "heyman"
	print $ splitAt 4 "heyman"
	print $ splitAt 5 "heyman"
	print $ splitAt 100 "heyman" 
	print $ splitAt 7 "heymaffffffffffffn" 
	print $ splitAt (-3) "heyman" 
	print $ let (a,b) = splitAt 3 "foobar" in b ++ a 