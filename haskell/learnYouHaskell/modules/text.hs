import qualified Data.Set as Set 

text1 = "I just had an anime dream. Anime... Reality... Are they so different?"  
text2 = "The old man left his garbage can out and now his trash is all over my lawn!" 

setOne = Set.fromList text1
setTwo = Set.fromList text2

main = do
	print $ setOne
	print $ setTwo   
	print $ Set.intersection setOne setTwo
	print $ Set.difference setOne setTwo 
	print $ Set.difference setTwo setOne 
	print $ Set.union setOne setTwo
