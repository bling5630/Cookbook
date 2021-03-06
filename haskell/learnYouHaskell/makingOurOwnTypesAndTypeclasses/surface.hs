surface :: Shape -> Float  
surface (Circle _ _ r) = pi * r ^ 2  
surface (Rectangle x1 y1 x2 y2) = (abs $ x2 - x1) * (abs $ y2 - y1)  

main = do
	print $ surface $ Circle 10 20 10 
	print $ surface $ Rectangle 0 0 100 100  
	print $ surface $ Circle 10 20 5 
	print $ surface $ Rectangle 50 230 60 90
	print $ map (Circle 10 20) [4,5,6,6]  

-- data Shape = Circle Float Float Float | Rectangle Float Float Float Float 
data Shape = Circle Float Float Float | Rectangle Float Float Float Float deriving (Show)