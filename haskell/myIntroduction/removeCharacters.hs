main = do  
       contents <- readFile "myIntrodiction.txt"
       let lowContents = map toLower contents
       let outStr = countWords (lowContents)
       let finalStr = sortOccurrences (outStr)
       let reversedStr = reverse finalStr
       putStrLn "Word | Occurrence "
       mapM_ (printList) reversedStr

-- Counts all the words.
countWords :: String -> [(String, Int)]
countWords fileContents = countOccurrences (toWords (removePunc fileContents))

-- Splits words and removes linking words.
toWords :: String -> [String]
toWords s = filter (\w -> w `notElem` ["an","the","for"]) (words s)

-- Remove punctuation from text String.
removePunc :: String -> String
removePunc xs = x | x <- xs, not (x `elem` ",.?!-:;\"\'")

-- Counts, how often each string in the given list appears.
countOccurrences :: [String] -> [(String, Int)]
countOccurrences xs = map (\xs -> (head xs, length xs)) . group . sort $ xs

-- Sort list in order of occurrences.
sortOccurrences :: [(String, Int)] -> [(String, Int)]
sortOccurrences sort = sortBy (comparing snd) sort

-- Prints the list in a format.
printList a = putStrLn((fst a) ++ " | " ++ (show $ snd a))