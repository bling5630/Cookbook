import qualified Data.Map as Map

main = do
	print $ Map.size Map.empty 
	print $ Map.size $ Map.fromList [(2,4),(3,3),(4,2),(5,4),(6,4)] 