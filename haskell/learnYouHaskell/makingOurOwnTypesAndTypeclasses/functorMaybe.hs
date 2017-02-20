import Prelude hiding (fmap, Functor)

class Functor f where  
    fmap :: (a -> b) -> f a -> f b

instance Functor Maybe where  
    fmap f (Just x) = Just (f x)  
    fmap f Nothing = Nothing  


main = do
	print $ fmap (++ " HEY GUYS IM INSIDE THE JUST") (Just "Something serious.") 
	print $ fmap (++ " HEY GUYS IM INSIDE THE JUST") Nothing 
	print $ fmap (*2) (Just 200)  
	print $ fmap (*2) Nothing 