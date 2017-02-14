data Either a b = Left a | Right b deriving (Eq, Ord, Read, Show) 


main = do
	print $ Right 20
	print $ Left "w00t"
