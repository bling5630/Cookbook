import Data.Char  
import Data.List  

main = do  
    contents <- fmap (intersperse '-' . reverse . map toUpper) getContents 
    putStrLn contents 
    