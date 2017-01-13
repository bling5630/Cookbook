data Bool = False | True deriving (Ord) 
main = do
	print $ True `compare` False  
	print $ True > False 
	print $ True < False  