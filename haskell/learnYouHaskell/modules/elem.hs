import Data.List  

main = do
	print $ partition (`elem` ['A'..'Z']) "BOBsidneyMORGANeddy" 
	print $ partition (>3) [1,3,5,6,3,2,1,0,3,7] 
	print $ span (`elem` ['A'..'Z']) "BOBsidneyMORGANeddy" 