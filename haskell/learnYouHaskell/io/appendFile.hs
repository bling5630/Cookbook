import System.IO    

withFile' :: FilePath -> IOMode -> (Handle -> IO a) -> IO a  
withFile' path mode f = do  
    handle <- openFile path mode   
    result <- f handle  
    hClose handle  
    return result 
    
main = do     
    todoItem <- getLine  
    appendFile "todo.txt" (todoItem ++ "\n")  