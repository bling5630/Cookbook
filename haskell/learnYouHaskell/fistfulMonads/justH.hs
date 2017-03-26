justH :: Maybe Char  
justH = do  
    (x:xs) <- Just "hello"  
    return x  

fail :: (Monad m) => String -> m a  
fail msg = error msg  

fail _ = Nothing  

