import Data.Char

main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  print $ introduction input ++ "thats all folks, from data to tada!!!!:)"
  print $ (words . introduction) input 
  print $ (words . introduction . filterComas) input
  print $ filterLetters input
  print $ input
  print $ map generalCategory input

punctuations = ['Ł','¤','ß','÷','”','_','×','Đ','đ','!', '"', '#', '$', '%', '(', ')', '.', '?', '*', '/', '-', '=', '*', '[', '|', ']', '{', '}', '&', '+', '<', '>', '@', ':']  
removePunctuations = filter (`notElem` punctuations)

filterNumbers = filter (not . isNumber) 

introduction = (removePunctuations . filterNumbers)

filterLetters = filter (`elem` ['a'..'z'])

filterComas = filter (`notElem` [','])



