{-data Person = Person { firstName :: String  
                     , lastName :: String  
                     , age :: Int  
                     } -}

{-data Person = Person { firstName :: String  
                     , lastName :: String  
                     , age :: Int  
                     } deriving (Eq)  
-}

data Person = Person { firstName :: String  
                     , lastName :: String  
                     , age :: Int  
                     } deriving (Eq, Show, Read)  

mikeD = Person {firstName = "Michael", lastName = "Diamond", age = 43}  
adRock = Person {firstName = "Adam", lastName = "Horovitz", age = 41}  
mca = Person {firstName = "Adam", lastName = "Yauch", age = 44}                     
beastieBoys = [mca, adRock, mikeD] 

main = do
	print $ mca == adRock
	print $ mikeD == mikeD 
	print $ mikeD == Person {firstName = "Michael", lastName = "Diamond", age = 43}  
	print $ mikeD `elem` beastieBoys
	print $ mikeD
	print $ mca
	print $ "adRock is a " ++ show adRock
	print $ "mikeD is: " ++ show mikeD 
	print $ read "8.2" + 3.8 
	print $ read "Person {firstName =\"Michael\", lastName =\"Diamond\", age = 43}" == mikeD  
{-	print $ read "Person {firstName =\"Michael\", lastName =\"Diamond\", age = 43}" :: Person
-}