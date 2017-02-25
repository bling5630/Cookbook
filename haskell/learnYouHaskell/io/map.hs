main = do
	mapM print [1,2,3] 
	print $ "break because this is a new function"
	sequence (map print [1,2,3,4,5]) 