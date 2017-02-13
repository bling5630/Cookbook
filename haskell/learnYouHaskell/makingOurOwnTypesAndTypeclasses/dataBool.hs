import Prelude hiding (False, True, Bool)

data Bool = False | True deriving (Ord, Eq)  

main = do
	print $ True `compare` False  
	print $ True > False 
	print $ True < False
	print $ Nothing < Just 100
	print $ Nothing > Just (-49999) 
	print $ Just 3 `compare` Just 2 
	print $ Just 100 > Just 50 