import Data.Char (isNumber)

filterNumbers = filter isNumber

main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  let cleanNumbers = filterNumbers input
  print cleanNumbers
  print input