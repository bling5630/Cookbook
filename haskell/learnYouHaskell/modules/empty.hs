import qualified Data.Map as Map

fromList' :: (Ord k) => [(k,v)] -> Map.Map k v  
fromList' = foldr (\(k,v) acc -> Map.insert k v acc) Map.empty 

main = do
	print $ Map.insert 3 100 Map.empty 
	print $ Map.insert 5 600 (Map.insert 4 200 ( Map.insert 3 100  Map.empty)) 
	print $ Map.insert 5 600 . Map.insert 4 200 . Map.insert 3 100 $ Map.empty 
