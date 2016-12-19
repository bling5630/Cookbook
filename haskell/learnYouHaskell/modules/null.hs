import qualified Data.Map as Map

main = do
	print $ Map.null Map.empty
	print $ Map.null $ Map.fromList [(2,3),(5,5)]