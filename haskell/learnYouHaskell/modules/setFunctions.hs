import qualified Data.Set as Set 

main = do
	print $ Set.null Set.empty
	print $ Set.null $ Set.fromList [3,4,5,5,4,3]
	print $ Set.size $ Set.fromList [3,4,5,3,4,5]
	print $ Set.singleton 9 
	print $ Set.insert 4 $ Set.fromList [9,3,8,1]
	print $ Set.insert 8 $ Set.fromList [5..10]
	print $ Set.delete 4 $ Set.fromList [3,4,5,4,3,4,5]