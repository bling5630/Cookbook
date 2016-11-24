import Data.List 


main = do
	print $ transpose [[1,2,3],[4,5,6],[7,8,9]] 
	print $ transpose ["hey","there","guys"] 
	print $ map sum $ transpose [[0,3,5,9],[10,0,0,9],[8,5,1,-1]]  
	print $ map sum [[0,3,5,9],[10,0,0,9],[8,5,1,-1]]  
