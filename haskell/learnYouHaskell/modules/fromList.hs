import qualified Data.Map as Map

phoneBook =   
    [("betty","555-2938")  
    ,("bonnie","452-2928")  
    ,("patsy","493-2928")  
    ,("lucille","205-2928")  
    ,("wendy","939-8282")  
    ,("penny","853-2492")  

main = do 
	print $ Map.fromList [("betty","555-2938"),("bonnie","452-2928"),("lucille","205-2928")]
	print $ Map.fromList [(1,2),(3,4),(3,2),(5,5)]