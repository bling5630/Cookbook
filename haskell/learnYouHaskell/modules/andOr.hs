main = do
	print $ and $ map (>4) [5,6,7,8]
	print $ and $ map (==4) [4,4,4,3,4] 
	print $ or $ map (==4) [2,3,4,5,6,1] 
	print $ or $ map (>4) [1,2,3] 