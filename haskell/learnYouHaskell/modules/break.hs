main = do
	print $ break (==4) [1,2,3,4,5,6,7]  
	print $ span (/=4) [1,2,3,4,5,6,7]