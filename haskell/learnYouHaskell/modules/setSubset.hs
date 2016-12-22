import qualified Data.Set as Set 

main = do
	print $ Set.fromList [2,3,4] `Set.isSubsetOf` Set.fromList [1,2,3,4,5]
	print $ Set.fromList [1,2,3,4,5] `Set.isSubsetOf` Set.fromList [1,2,3,4,5] 
	print $ Set.fromList [1,2,3,4,5] `Set.isProperSubsetOf` Set.fromList [1,2,3,4,5] 
	print $ Set.fromList [2,3,4,8] `Set.isSubsetOf` Set.fromList [1,2,3,4,5] 
	print $ Set.filter odd $ Set.fromList [3,4,5,6,7,2,3,4] 
	print $ Set.map (+1) $ Set.fromList [3,4,5,6,7,2,3,4]