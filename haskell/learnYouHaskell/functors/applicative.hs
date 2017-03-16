class (Functor f) => Applicative f where  
    pure :: a -> f a  
    (<*>) :: f (a -> b) -> f a -> f b

instance Applicative Maybe where  
    pure = Just  
    Nothing <*> _ = Nothing  
    (Just f) <*> something = fmap f something  

main = do 
	print $ Just (+3) <*> Just 9 
	print $ pure (+3) <*> Just 10
	print $ pure (+3) <*> Just 9 
	print $ Just (++"hahah") <*> Nothing  
	print $ (( Nothing <*> Just "woot") :: Maybe Int)