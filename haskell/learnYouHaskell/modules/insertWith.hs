import qualified Data.Map as Map

main = do
	print $ Map.insertWith (+) 3 100 $ Map.fromList [(3,4),(5,103),(6,339)]  
	print $ Map.insertWith (+) 5 400 $ Map.fromList [(3,4),(5,103),(6,339)]  
	print $ Map.insertWith (-) 6 338 $ Map.fromList [(3,4),(5,103),(6,339)]  