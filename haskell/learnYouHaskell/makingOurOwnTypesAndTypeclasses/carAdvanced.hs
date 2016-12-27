--data Car = Car { company :: String
--               , model :: String
--               , year :: Int
--               } deriving (Show)

data Car a b c = Car { company :: a
                     , model :: b
                     , year :: c
                     } deriving (Show)

tellCar :: Car -> String
tellCar (Car {company = c, model = m, year = y}) = "This " ++ c ++ " " ++ m ++ " was made in " ++ show y

stang = Car {company="Ford", model="Mustang", year=1967}

main = print $ tellCar stang
