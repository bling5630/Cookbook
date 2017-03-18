-- import Data.Monoid

class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  

instance Monoid a => Monoid (Maybe a) where  
    mempty = Nothing  
    Nothing `mappend` m = m  
    m `mappend` Nothing = m  
    Just m1 `mappend` Just m2 = Just (m1 `mappend` m2)  

instance Monoid [a] where
    mempty = []
    l1 `mappend` l2 = l1 ++ l2

instance Monoid Ordering where  
    mempty = EQ  
    LT `mappend` _ = LT  
    EQ `mappend` y = y  
    GT `mappend` _ = GT 

main = do
	print $ Nothing `mappend` Just "andy"
	print $ Just LT `mappend` Nothing 
