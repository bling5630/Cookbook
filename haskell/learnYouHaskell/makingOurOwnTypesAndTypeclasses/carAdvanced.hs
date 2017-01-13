--data Car = Car { company :: String
--               , model :: String
--               , year :: Int
--               } deriving (Show)

data Car a b c = Car { company :: a
                     , model :: b
                     , year :: c
                     } deriving (Show)

tellCar :: (Show a) => Car String String a -> String 
tellCar (Car {company = c, model = m, year = y}) = "This " ++ c ++ " " ++ m ++ " was made in " ++ show y

stang = Car {company="Ford", model="Mustang", year=1967}

main = do 
	print $ tellCar stang
	print $ tellCar (Car "Ford" "Mustang" 1967)  
	print $ tellCar (Car "Ford" "Mustang" "nineteen sixty seven")  
