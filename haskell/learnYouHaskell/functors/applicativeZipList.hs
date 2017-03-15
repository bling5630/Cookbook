import Control.Applicative 

main = do 
	print $ getZipList $ (+) <$> ZipList [1,2,3] <*> ZipList [100,100,100] 
	print $ getZipList $ (+) <$> ZipList [1,2,3] <*> ZipList [100,100..]  
	print $ getZipList $ max <$> ZipList [1,2,3,4,5,3] <*> ZipList [5,3,1,2] 
	print $ getZipList $ (,,) <$> ZipList "dog" <*> ZipList "cat" <*> ZipList "rat"  