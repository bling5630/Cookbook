import Data.List  

main = do
	print $ findIndex (==5) [5,3,2,1,6,4] 
	print $ findIndex (==3) [5,3,2,1,6,4] 
	print $ findIndex (==2) [5,3,2,1,6,4] 
	print $ findIndex (==1) [5,3,2,1,6,4] 
	print $ findIndex (==6) [5,3,2,1,6,4] 
	print $ findIndex (==4) [5,3,2,1,6,4] 
	print $ findIndex (==7) [5,3,2,1,6,4]  
	print $ findIndices (`elem` ['A'..'Z']) "Where Are The Caps?"