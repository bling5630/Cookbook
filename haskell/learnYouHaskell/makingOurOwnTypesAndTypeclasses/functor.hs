import Prelude hiding (fmap, Functor)

class Functor f where  
    myFmap :: (a -> b) -> f a -> f b

instance Functor [] where  
    myFmap = map 

main = do 
	print $ myFmap (*2) [1..3]
	print $ map (*2) [1..3]
	