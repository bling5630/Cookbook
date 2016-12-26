data Person = Person { firstName :: String  
                     , lastName :: String  
                     , age :: Int  
                     , height :: Float  
                     , phoneNumber :: String  
                     , flavor :: String
                     , occupation :: String  
                     } deriving (Show)   


jozsef = Person "Jozsef" "Finklestein" 43 184.2 "526-2928" "Chocolate" "Buddy"
endre = Person "Endre" "Horvath" 23 204.2 "123-3232" "Apple" "Classmate"

main = do 
	print endre	
	print jozsef 
	print $ flavor jozsef 
	print $ firstName endre	
	print $ lastName jozsef
	print $ phoneNumber endre	
	print $ height jozsef
	print $ age endre	
	print $ phoneNumber jozsef
	print $ age endre
	print $ occupation endre	
	print $ occupation jozsef