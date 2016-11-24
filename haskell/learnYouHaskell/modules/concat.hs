main = do
	print $ concat ["foo","bar","car"]  
	print $ concat [[3,4,5],[2,3,4],[2,1,1]]
	print $ concat [[[2,3],[3,4,5],[2]],[[2,3],[3,4]]]	
	print $ concat (concat [[[2,3],[3,4,5],[2]],[[2,3],[3,4]]])
	print $ concatMap (replicate 4) [1..3]