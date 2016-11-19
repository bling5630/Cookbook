($$) :: (a -> b) -> a -> b
($$) f x = f x

transformWith :: (Int -> Int) -> Int -> Int
transformWith f x = f x

multiplyBy2 :: Int -> Int
multiplyBy2 x = x * 2

addThree :: Int -> Int
addThree x = x + 3

addFive :: Int -> Int
addFive x = x + 5

add = (addFive . addThree)

(+++) :: [a] -> [a] -> [a]
(+++) [] [] = []
(+++) [] list2@(x:xs) = list2
(+++) list1@(x:xs) [] = list1
(+++) l1@(x:xs) l2@(y:ys) = x : (xs +++ l2)

reverseList :: [a] -> [a]
reverseList [] = []
reverseList (x:xs) = reverseList xs +++ [x]

extraFunctionMultiplyBy2AddThree = (addThree . multiplyBy2)

main = do
	print $ transformWith multiplyBy2 3	
	print $ transformWith addThree 6
	print $ extraFunctionMultiplyBy2AddThree 5	
