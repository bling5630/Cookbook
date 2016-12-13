import Data.List.Split ( splitOn )
import Data.Char ( isNumber, isSymbol, isLetter )

removeNonLetters = filter isLetter
filterNumbers = filter (not . isNumber) 

main =do
	print $ (splitOn " " . removeNonLetters) "15+41-2Hel54lo **1212 Wor2ld! Ho5w Are 6996 Yo7u?"
	print $ removeNonLetters "15+41-2Hel54lo **1212 Wor2ld! Ho5w Are 6996 Yo7u?"
	print $ splitOn " " "15+41-2Hel54lo **1212 Wor2ld! Ho5w Are 6996 Yo7u?"
	print $ (splitOn " " . filterNumbers) "15+41-2Hel54lo **1212 Wor2ld! Ho5w Are 6996 Yo7u?"