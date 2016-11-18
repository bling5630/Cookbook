($$) :: (a -> b) -> a -> b
($$) f x = f x

transformWith :: (Int -> Int) -> Int -> Int
transformWith f x = f x

multiplyBy2 :: Int -> Int
multiplyBy2 x = x * 2

addThree :: Int -> Int
addThree x = x + 3

main = do
	print $ transformWith multiplyBy2 3	
	print $ transformWith addThree 6	
	print $ transformWith addThree 9