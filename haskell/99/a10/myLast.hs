-- 1 Problem 1
-- (*) Find the last element of a list.
-- (Note that the Lisp transcription of this problem is incorrect.)
-- Example in Haskell:
-- Prelude> myLast [1,2,3,4]
-- 4
-- Prelude> myLast ['x','y','z']
-- 'z'

myLast :: [a] -> a
myLast [] = error "Can't do last of an empty list!"
myLast [x] = x --base case is when there's just one element remaining
myLast (_:xs) = myLast xs --if there's anything in the head, continue until there's one element left

myLastElem :: [b] -> [b]
myLastElem [] = []
myLastElem [x] = [x]
myLastElem (_:xs) = myLastElem xs

main = do 
	print $ myLast [1,2,3,4]
	print $ myLast ['x','y','z']
	print $ last [9,8,7,6,5]
	print $ myLastElem [1,2,3,4,5,6,7,8,9]
	print $ myLastElem ['x','y','z','q','t']

