import Data.List 

main = do
	print $ intersperse '.' "MONKEY"
	print $ intersperse '-' "MONKEY"
	print $ intersperse 0 [1,2,3,4,5,6]
	print $ intercalate " " ["hey","there","guys"] 
	print $ intercalate [0,0,0] [[1,2,3],[4,5,6],[7,8,9]]  