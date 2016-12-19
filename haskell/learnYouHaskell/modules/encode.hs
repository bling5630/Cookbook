import Data.Char 

encode :: Int -> String -> String  
encode shift msg = 
    let ords = map ord msg  
        shifted = map (+ shift) ords  
    in  map chr shifted 

main = do
	print $ encode 3 "Heeeeey"
	print $ encode 4 "Heeeeey"
	print $ encode 1 "abcd"
	print $ encode 5 "Marry Christmas! Ho ho ho!" 