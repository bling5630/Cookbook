import qualified Data.Map as Map

main = do
	print $ Map.member 3 $ Map.fromList [(3,6),(4,3),(6,9)]  
	print $ Map.member 3 $ Map.fromList [(2,5),(4,5)] 