import Data.Char (isLetter)

removeNonLetters = filter isLetter

main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  let cleanNumbers = removeNonLetters input
  print cleanNumbers
