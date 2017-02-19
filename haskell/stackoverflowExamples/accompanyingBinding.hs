{-import Prelude hiding (even, odd)
-}
carpark :: Int -> Int -> String
{-error :: String -> a
-}
whatNumber n = length evenFactors == length oddFactors
  where evenFactors = [x | x <- [2, 4..(n-1)], n `mod` x == 0]
        oddFactors  = [x | x <- [3, 5..(n-1)], n `mod` x == 0]

even, odd       :: (Integral a) => a -> Bool
even n          =  n `rem` 2 == 0
odd             =  not . even

carpark wheels cars
  | wheels   == odd    = error (show wheels ++ "is not even")
  | cars     <= 0        = error (show cars ++ "is an invalid number")
  | (2*cars) >= wheels   = error (show "the number of wheels is invalid")
  | wheels   >= (4*cars) = error "the number of wheels is invalid"
  | otherwise            = show "bum"

