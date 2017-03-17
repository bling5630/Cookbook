class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  

instance Monoid [a] where  
    mempty = []  
    mappend = (++)


newtype All = All { getAll :: Bool }  
        deriving (Eq, Ord, Read, Show, Bounded)  

instance Monoid All where  
        mempty = All True  
        All x `mappend` All y = All (x && y) 

main = do
	print $ getAll $ mempty `mappend` All True  
	print $ getAll $ mempty `mappend` All False
	print $ getAll . mconcat . map All $ [True, True, True]
	print $ getAll . mconcat . map All $ [True, True, False]