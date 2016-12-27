-- data Car = Car String String Int deriving (Show)  

data Car = Car  { company :: String
				, model :: String
				, year :: Int
			    } deriving (Show)

vehicle = Car {company="Ford", model="Mustang", year=1967}
vehicleTwo = Car "Mercedes" "SL" 2012

main = do
	print $ vehicle
	print $ vehicleTwo
