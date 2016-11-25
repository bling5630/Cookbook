main = do
	print $ takeWhile (>3) [6,5,4,3,2,1,2,3,4,5,4,3,2,1] 
	print $ takeWhile (/=' ') "This is a sentence"  
	print $ sum $ takeWhile (<10000) $ map (^3) [1..]  