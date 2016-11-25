import Data.List  

main = do
	print $ group [1,1,1,1,2,2,2,2,3,3,2,2,2,5,6,7] 
	print $ map (\l@(x:xs) -> (x,length l)) . group . sort $ [1,1,1,1,2,2,2,2,3,3,2,2,2,5,6,7] 
