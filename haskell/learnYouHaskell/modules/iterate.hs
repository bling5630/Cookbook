main = do
	print $ take 10 $ iterate (*2) 1 
	print $ take 3 $ iterate (++ "haha") "haha"