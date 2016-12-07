showPet :: Maybe (String, Int, String) -> String
showPet Nothing     = "none"
showPet (Just (name, age, species)) = "a " ++ species ++ " named " ++ name ++ ", aged " ++ (show age)

main = print $ showPet (Just ("cat",5,"felix"))