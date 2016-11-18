myMap :: (a -> b) -> [a] -> [b]
myMap _ [] = []
myMap f (head:tail) = f head : myMap f tail

multiplyBy2 :: Int -> Int
multiplyBy2 x = x * 2

main = do 
	print $ myMap multiplyBy2 [1,2,3,4,5,6,7,8,9]
	print $ myMap multiplyBy2 [10,20,30,40]