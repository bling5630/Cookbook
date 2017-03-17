class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  

instance Monoid [a] where  
    mempty = []  
    mappend = (++)  

main = do
	print $ [1,2,3] `mappend` [4,5,6]
	print $ ("one" `mappend` "two") `mappend` "tree"
	print $ "one" `mappend` ("two" `mappend` "tree")  
	print $ "one" `mappend` "two" `mappend` "tree"
	print $ "pang" `mappend` mempty
	print $ mconcat [[1,2],[3,6],[9]] 
	print $ "one" `mappend` "two" 
	print $ "two" `mappend` "one" 
