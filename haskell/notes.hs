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

6 stack?

7 http://www.yesodweb.com/book/basics
