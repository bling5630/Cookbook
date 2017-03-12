main = do
	print $ fmap (replicate 3) [1,2,3,4]
	print $ fmap (replicate 3) (Just 4)
