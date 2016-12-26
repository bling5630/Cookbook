data Animal
    = Cat Int String
    | Dog Int String
    | Frog Int String
    | Cow Int String

showAnimals :: Animal -> String
showAnimals (Cat age name) = "En egy macska vagyok, aki " ++ show age ++ " eves es " ++ name ++ "-nak hivjak."
showAnimals (Cow age name) = "En egy tehen vagyok, aki " ++ show age ++ " eves es " ++ name ++ "-nak hivjak."
-- showAnimals (Dog age name) = "En egy kutya vagyok, aki " ++ show age ++ " eves es " ++ name ++ "-nak hivjak."
showAnimals (Frog age name) = "En egy beka vagyok, aki " ++ show age ++ " eves es " ++ name ++ "-nak hivjak."
showAnimals _ = "En egy akarmi vagyok s nincs semmi jelemzom"

main = do
	print $ (showAnimals (Cat 20 "bela"))	
	print $ (showAnimals (Cow 20 "bela"))	
	print $ (showAnimals (Dog 32 "jozsi"))	
	print $ (showAnimals (Frog 45 "arnold"))
