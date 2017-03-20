class MyMonad m where  
    myReturn :: a -> m a  
  
    (>>==) :: m a -> (a -> m b) -> m b  
  
    (>>) :: m a -> m b -> m b  
    x >> y = x >>== \_ -> y  
  
    fail :: String -> m a  
    fail msg = error msg  


instance MyMonad Maybe where  
    myReturn x = Just x  
    Nothing >>== f = Nothing  
    Just x >>== f  = f x  
    fail _ = Nothing 

main = do
	print $ (myReturn "WHAT" :: Maybe String )
	print $ Just 9 >>== \x -> myReturn (x*10)  
	print $ Nothing >>= \x -> myReturn (x*10)  
