import Data.Monoid  
  
lengthCompare :: String -> String -> Ordering  
lengthCompare x y = (length x `compare` length y) `mappend`  
                    (x `compare` y) 

main = do
	print $ lengthCompare "zen" "ants"  
	print $ lengthCompare "zen" "ant" 