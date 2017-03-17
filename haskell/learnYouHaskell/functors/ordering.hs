class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  

instance Monoid [a] where  
    mempty = []  
    mappend = (++)

instance Monoid Ordering where  
    mempty = EQ  
    LT `mappend` _ = LT  
    EQ `mappend` y = y  
    GT `mappend` _ = GT 

main = do
	print $ LT `mappend` GT 
	print $ GT `mappend` LT 
	print $ mempty `mappend` LT  
	print $ mempty `mappend` GT