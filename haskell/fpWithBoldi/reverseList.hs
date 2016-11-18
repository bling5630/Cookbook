(+++) :: [a] -> [a] -> [a]
(+++) [] [] = []
(+++) [] list2@(x:xs) = list2
(+++) list1@(x:xs) [] = list1
(+++) l1@(x:xs) l2@(y:ys) = x : (xs +++ l2)

reverseList :: [a] -> [a]
reverseList [] = []
reverseList (x:xs) = reverseList xs +++ [x]



main = print $ reverseList [1,2,3,4,5,6,7,8,9]