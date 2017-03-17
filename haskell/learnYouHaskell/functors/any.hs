class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  

instance Monoid [a] where  
    mempty = []  
    mappend = (++)

newtype Any = Any { getAny :: Bool }  
    deriving (Eq, Ord, Read, Show, Bounded)  

instance Monoid Any where  
        mempty = Any False  
        Any x `mappend` Any y = Any (x || y) 


main = do
	print $ getAny $ Any True `mappend` Any False
	print $ getAny $ mempty `mappend` Any True  
	print $ getAny . mconcat . map Any $ [False, False, False, True]
	print $ getAny $ mempty `mappend` mempty