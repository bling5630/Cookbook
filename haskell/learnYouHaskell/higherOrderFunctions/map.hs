($$) :: (a -> b) -> a -> b
($$) f x = f x

myMap :: (a -> b) -> [a] -> [b]
myMap _ [] = []
myMap f (head:tail) = f head : myMap f tail

main = do 
	print $ myMap (+3) [1,5,3,1,6]
	print $ myMap (++ "!") ["BIFF", "BANG", "POW"] 
	print $ myMap (replicate 3) [3..6] 
	print $ myMap (myMap (^2)) [[1,2],[3,4,5,6],[7,8]] 
	print $ myMap fst [(1,2),(3,5),(6,3),(2,6),(2,5)] 