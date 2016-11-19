myMap :: (a -> b) -> [a] -> [b]
myMap _ [] = []
myMap f (head:tail) = f head : myMap f tail

multiplyBy2 :: Int -> Int
multiplyBy2 x = x * 2

(+++) :: [a] -> [a] -> [a]
(+++) [] [] = []
(+++) [] list2@(x:xs) = list2
(+++) list1@(x:xs) [] = list1
(+++) l1@(x:xs) l2@(y:ys) = x : (xs +++ l2)

reverseList :: [a] -> [a]
reverseList [] = []
reverseList (x:xs) = reverseList xs +++ [x]

extraFunction = (multiplyBy2 . multiplyBy2)

main = do 
	print $ myMap multiplyBy2 [1,2,3,4,5,6,7,8,9]
	print $ myMap multiplyBy2 [10,20,30,40]
	print $ extraFunction 9