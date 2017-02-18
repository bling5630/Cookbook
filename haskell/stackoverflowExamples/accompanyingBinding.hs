carpark :: Int -> Int -> String
error :: String -> a
{-whatNumber n = length evenFactors == length oddFactors
  where evenFactors = [x | x <- [2, 4..(n-1)], n `mod` x == 0]
        oddFactors  = [x | x <- [3, 5..(n-1)], n `mod` x == 0]
-}
carpark wheels cars error
  | wheels   == odd    = error (show wheels ++"is not even")
  | cars     <= 0        = error cars "is an invalid number"
  | (2*cars) >= wheels   = error "the number of wheels is invalid"
  | wheels   >= (4*cars) = error "the number of wheels is invalid"
  | otherwise            = "There are " (wheels-(2 * cars)) `div` 2 "cars and " (cars - ((wheels - (2 * cars)) div 2)) "motorcycles on the parking lot"

