import Data.Char 

encode :: Int -> String -> String  
encode shift msg = 
    let ords = map ord msg  
        shifted = map (+ shift) ords  
    in  map chr shifted 
    
decode :: Int -> String -> String
decode shift msg = encode (negate shift) msg

main = do 
	print $ decode 3 "Im a little teapot" 
	print $ decode 3 "Lp#d#olwwoh#whdsrw" 
	print $ decode 5 . encode 5 $ "This is a sentence"