class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  

newtype First a = First { getFirst :: Maybe a }  
    deriving (Eq, Ord, Read, Show) 

instance Monoid (First a) where  
    mempty = First Nothing  
    First (Just x) `mappend` _ = First (Just x)  
    First Nothing `mappend` x = x  

main = do
	print $ getFirst $ First (Just 'a') `mappend` First (Just 'b') 
	print $ getFirst $ First Nothing `mappend` First (Just 'b')
	print $ getFirst $ First Nothing `mappend` First (Just 'b')
	print $ getFirst . mconcat . map First $ [Nothing, Just 9, Just 10]  
