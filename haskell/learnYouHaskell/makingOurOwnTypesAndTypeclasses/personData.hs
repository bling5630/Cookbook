data Person = Person String String Int Float String String deriving (Show) 

jozsef = Person "Buddy" "Finklestein" 43 184.2 "526-2928" "Chocolate"
endre = Person "Classmate" "Horvath" 23 204.2 "123-3232" "Apple"

main = do
	print jozsef
	print endre