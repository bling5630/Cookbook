import Data.List  

main = do
	print $ inits "w00t"
	print $ tails "w00t" 
	print $ let w = "w00t" in zip (inits w) (tails w)  