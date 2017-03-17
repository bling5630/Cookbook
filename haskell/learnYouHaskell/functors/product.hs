class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  

instance Monoid [a] where  
    mempty = []  
    mappend = (++)  

newtype Product a =  Product { getProduct :: a }  
    deriving (Eq, Ord, Read, Show, Bounded) 

instance Num a => Monoid (Product a) where  
    mempty = Product 1  
    Product x `mappend` Product y = Product (x * y) 

main = do
	print $ getProduct $ Product 3 `mappend` Product 9 
	print $ getProduct $ Product 3 `mappend` mempty 
	print $ getProduct $ Product 3 `mappend` Product 4 `mappend` Product 2 
	print $ getProduct . mconcat . map Product $ [3,4,2]
