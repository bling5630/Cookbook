import Data.Char (isDigit)

removeNonNumbers :: String -> String
removeNonNumbers = filter isDigit

main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  let cleanNumbers = removeNonNumbers input
  print cleanNumbers
