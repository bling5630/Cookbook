data Animal
    = Cat Int String
    | Dog Int String
    | Frog Int String
    | Cow Int String

showAnimals :: Animal -> String
showAnimals (Cat kora neve) = "En egy macska vagyok, aki " ++ show kora ++ " eves es " ++ neve ++ "-nak hivjak."
-- showAnimals (Cow kora neve) = "En egy macska vagyok, aki " ++ show kora ++ " eves es " ++ neve ++ "-nak hivjak."
showAnimals (Dog kora neve) = "En egy macska vagyok, aki " ++ show kora ++ " eves es " ++ neve ++ "-nak hivjak."
showAnimals (Frog kora neve) = "En egy macska vagyok, aki " ++ show kora ++ " eves es " ++ neve ++ "-nak hivjak."
showAnimals _ = "akarmi"

main = do
	print $ (showAnimals (Cat 20 "bela"))	
	print $ (showAnimals (Cow 20 "bela"))	
	print $ (showAnimals (Dog 32 "jozsi"))	
	print $ (showAnimals (Frog 45 "arnold"))
