import Data.List  

main = do
	print $ words "hey these are the words in this sentence" 
	print $ words "hey these           are    the words in this\nsentence" 
	print $ unwords ["hey","there","mate"]  