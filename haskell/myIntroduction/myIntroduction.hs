import Text.Regex.Posix ((=~))

looksLikeName :: String -> Bool
looksLikeName str = str =~ "^[A-Z][a-z]{1,30}$" :: Bool
punctuations = ['1','2','3','4','5','6','7','8','9','0',']','[','=',':','!', '"', '#', '$', '%', '(', ')', '.', ',', '?']  
removePunctuation = filter (`notElem` punctuations)

specialSymbols = ['/', '-']
replaceSpecialSymbols = map $ (\c -> if c `elem` specialSymbols
                                     then ' ' else c)

createTuples (x:y:xs) = (x ++ " " ++ y) : createTuples (y:xs)
createTuples _ = []

-- Matches a regular expression to find names
main :: IO ()
main = do
  input <- readFile "myIntroduction.txt"
  let cleanInput = (removePunctuation.replaceSpecialSymbols) input
  let wordPairs = createTuples $ words cleanInput
  -- let possibleNames = 
  --       filter (all looksLikeName . words) wordPairs
  -- print possibleNames
  print cleanInput