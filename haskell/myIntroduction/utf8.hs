-- import Data.String.UTF8 (length)

-- Cleans up a sentence
main :: IO ()
main = do
  let quote = "Deep Blue plays very good chess-so what? Does that tell you something about how we play chess? No. Does it tell you about how Kasparov envisions, understands a chessboard? (Douglas Hofstadter)"
  -- print $ (removePunctuation.replaceSpecialSymbols) quote
  print $ Prelude.length quote
  print $ Prelude.splitAt 1 quote

-- Removes punctuation using the `replace` function  
-- removePunctuation = foldr (.) id $ map (flip replace "") 
--         ["!", "\"", "#", "$", "%", "(", ")", ".", ",", "?"]

-- -- Replaces some symbols with a space using `replace`       
-- replaceSpecialSymbols = foldr (.) id $ map (flip replace " ") 
--         ["/", "-"]