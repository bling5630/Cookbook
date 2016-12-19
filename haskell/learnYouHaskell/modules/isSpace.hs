import Data.Char 
import Data.List
import Data.Function

main = do
	print $ words "hey guys its me" 
	print $ groupBy ((==) `on` isSpace) "hey guys its me" 
	print $ filter (not . any isSpace) . groupBy ((==) `on` isSpace) $ "hey guys its me" 