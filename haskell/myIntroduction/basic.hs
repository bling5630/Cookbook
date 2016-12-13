import Data.Char (isNumber, isSymbol, isLetter)
import Data.List.Split (splitOn)

main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  -- print $ (removePunctuation . filterNumbers . filterSymbol) input
  print $ (splitOn " " . filterNumbers . removePunctuation) input

-- Removes punctuation
punctuations = ['!', '"', '#', '$', '%', '(', ')', '.', '?', '*', '/', '-', '=', '*', '[', '|', ']', '{', '}', '&', '+', '<', '>', '@', ':']  
removePunctuation = filter (`notElem` punctuations)

filterNumbers = filter (not . isNumber) 

filterSymbol = filter (not . isSymbol)


