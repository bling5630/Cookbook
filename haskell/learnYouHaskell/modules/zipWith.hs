import Data.List  

main = do
	print $ zipWith3 (\x y z -> x + y + z) [1,2,3] [4,5,2,2] [2,2,3] 
	print $ zip4 [2,3,3] [2,2,2] [5,5,3] [2,2,2] 