main = do  
    foo <- putStrLn "Hello, what's your name?"  
    name <- getLine  
    putStrLn ("Hey " ++ name ++ ", you rock!") 
    bar <- putStrLn "Hello, what's your favorite meal?"  
    meal <- getLine  
    putStrLn ("Hey " ++ meal ++ ", you rock!")  