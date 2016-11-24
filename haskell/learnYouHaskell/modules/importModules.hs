import Data.List  
  
numUniques :: (Eq a) => [a] -> Int  
numUniques = length . nub  
-- numUniques = \xs -> length (nub xs)

