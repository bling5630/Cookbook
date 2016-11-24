main = do
	print $ any (==4) [2,3,5,6,1,4]
	print $ all (>4) [6,9,10] 
	print $ all (`elem` ['A'..'Z']) "HEYGUYSwhatsup"  
	print $ all (`elem` ['a'..'z']) "whatsup"  
	print $ all (`elem` ['A'..'Z']) "HEYGUY"  
