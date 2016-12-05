-- learn you haskell modules
1
-- ide kell pattern matching ? gyakorolni ?
map sum $ transpose [[0,3,5,9],[10,0,0,9],[8,5,1,-1]]

2
-- if you want to completely flatten [[[2,3],[3,4,5],[2]],[[2,3],[3,4]]], 
-- which is a list of lists of lists, you have to concatenate it twice, how?
-- concat (concat [[[2,3],[3,4,5],[2]],[[2,3],[3,4]]]) ?

3
let stock = [(994.4,2008,9,1),(995.2,2008,9,2),(999.2,2008,9,3),(1001.4,2008,9,4),(998.3,2008,9,5)] 
main = do
	print $ head (dropWhile (\(val,y,m,d) -> val < 1000) stock)
-- /home/tamas/my_cookbok/haskell/learnYouHaskell/modules/dropWhile.hs:3:1:
--     parse error (possibly incorrect indentation or mismatched brackets)
-- [Finished in 0.2s with exit code 1]

4
import Data.List  

search :: (Eq a) => [a] -> [a] -> Bool  
search needle haystack =   
    let nlen = length needle  
    in  foldl (\acc x -> if take nlen x == needle then True else acc) False (tails haystack)  

5 webservers, frameworks?

6 stack, ghc, haskellPlatform ?

7 http://www.yesodweb.com/book/basics
http://stackoverflow.com/questions/32200773/getting-could-not-find-module-yesod-when-i-try-to-run-first-example-from-yes

8 https://www.youtube.com/watch?v=BEWJnDgrmp0
/home/tamas/my_cookbok/haskell/webserver/yesdBasics/helloWorld.hs:6:8:
    Could not find module `Yesod'

9 https://gist.github.com/aaronlevin/0ac2df65a8aafcd4fe3240454e37e26d
-- tamas@tamas-S400:~/my_cookbok/haskell/aaronlevin$ runhaskell http.hs 
-- http.hs:6:8:
--     Could not find module `Network.Wai.Handler.Warp'
--     Perhaps you meant
--       Network.Wai.Handler.CGI (from wai-extra-3.0.1.2)
--       Network.Wai.Handler.SCGI (from wai-extra-3.0.1.2)
--     Use -v to see a list of the files searched for.
-- tamas@tamas-S400:~/my_cookbok/haskell/aaronlevin$

10 packages errors

11 

-- putStrLn :: String -> IO ()

-- action :: IO ()
-- action = putStrLn "Hello World"

-- runhaskell index.hs
-- PutStrLn.hs:3:1:
--     The type signature for `putStrLn' lacks an accompanying binding
--       (The type signature must be given where `putStrLn' is declared)
