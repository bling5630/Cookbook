data CMaybe a = CNothing | CJust Int a deriving (Show)  

instance Functor CMaybe where  
    fmap f CNothing = CNothing  
    fmap f (CJust counter x) = CJust (counter+1) (f x)  

main = do 
	print $ fmap (++"ha") (CJust 0 "ho")  
	print $ fmap (++"he") (fmap (++"ha") (CJust 0 "ho"))
	print $ fmap (++"blah") CNothing  
	print $ fmap id (CJust 0 "haha")  
	print $ id (CJust 0 "haha")  