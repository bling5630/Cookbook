-- 2 Problem 2
-- (*) Find the last but one element of a list.
-- (Note that the Lisp transcription of this problem is incorrect.)
-- Example in Haskell:
-- Prelude> myButLast [1,2,3,4]
-- 3
-- Prelude> myButLast ['a'..'z']
-- 'y'

lastButOne :: [a] -> Maybe a
lastButOne [] = Nothing
lastButOne [_] = Nothing
lastButOne [x,_] = Just x
lastButOne (_:xs) = lastButOne xs

secondLastElement :: [a] -> a
secondLastElement = (last . init)

main = do
	print $ lastButOne [1,2,3,4]
	print $ [1]
	print $ [0]
	print $ (last . init) [1,2,3,4]
	print $ lastButOne ['a'..'z']
	print $ secondLastElement [1,2,3,4]
	print $ secondLastElement [9,2]
	print $ secondLastElement ['a'..'z']
	print $ secondLastElement [0]
