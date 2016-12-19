import qualified Data.Map as Map

main = do
	print $ Map.singleton 3 9 
	print $ Map.insert 5 9 $ Map.singleton 3 9 