data Person = Person String String Int Float String String String deriving (Show) 

firstName :: Person -> String  
firstName (Person firstname _ _ _ _ _ _) = firstname  
  
lastName :: Person -> String  
lastName (Person _ lastname _ _ _ _ _) = lastname  
  
age :: Person -> Int  
age (Person _ _ age _ _ _ _) = age  
  
height :: Person -> Float  
height (Person _ _ _ height _ _ _) = height  
  
phoneNumber :: Person -> String  
phoneNumber (Person _ _ _ _ number _ _) = number  
  
flavor :: Person -> String  
flavor (Person _ _ _ _ _ flavor _) = flavor 

occupation :: Person -> String
occupation (Person _ _ _ _ _ _ occupation) = occupation 

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
