import Data.Char 

main = do
	print $ generalCategory ' ' 
	print $ generalCategory 'A'
	print $ generalCategory 'a'
	print $ generalCategory '.'
	print $ generalCategory '9'
	print $ map generalCategory " \t\nA9?|"