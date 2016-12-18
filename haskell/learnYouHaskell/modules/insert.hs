import Data.List 

main = do
	print $ insert 4 [3,5,1,2,8,2] 
	print $ insert 4 [1,3,4,4,1]
	print $ insert 4 [1,2,3,5,6,7]
	print $ insert 'g' $ ['a'..'f'] ++ ['h'..'z']  
	print $ insert 3 [1,2,4,3,2,1] 