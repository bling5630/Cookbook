main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  print $ (removePunctuation . replaceSpecialSymbols) input

-- Removes punctuation
punctuations = ['!', '"', '#', '$', '%', '(', ')', '.', ',', '?']  
removePunctuation = filter (`notElem` punctuations)

-- Replaces some symbols with a space
specialSymbols = ['/', '-', '=', '*', '[', '|', ']', '{', '}', '&', '+', '<', '>', '@', ':']
replaceSpecialSymbols = map $ (\c -> if c `elem` specialSymbols 
                                     then ' ' else c)