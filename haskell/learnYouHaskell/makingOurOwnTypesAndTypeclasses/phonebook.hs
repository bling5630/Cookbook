{-phoneBook :: [(String,String)]  
-}
{-type PhoneBook = [(String,String)] 
-}
type PhoneNumber = String  
type Name = String  
type PhoneBook = [(Name,PhoneNumber)] 

inPhoneBook :: Name -> PhoneNumber -> PhoneBook -> Bool  
inPhoneBook name pnumber pbook = (name,pnumber) `elem` pbook  

phoneBook =      
    [("betty","555-2938")     
    ,("bonnie","452-2928")     
    ,("patsy","493-2928")     
    ,("lucille","205-2928")     
    ,("wendy","939-8282")     
    ,("penny","853-2492")     
    ] 

main =  print $ phoneBook