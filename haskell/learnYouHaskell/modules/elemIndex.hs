import Data.List  

main = do
	print $ 4 `elemIndex` [1,2,3,4,5,6] 
	print $ 10 `elemIndex` [1,2,3,4,5,6] 
	print $ ' ' `elemIndices` "Where are the spaces?" 	
	print $ 'e' `elemIndices` "Where are the spaces?" 