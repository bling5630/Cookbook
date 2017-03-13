-- test :: String -> String -> Int
-- test' x y n = n
-- test' "" (y:ys) n = error "error"
-- test' (x:xs) "" n = error "error"
-- test' (x:xs) (y:ys) n =
--         if      x == y
--         then    test'  xs ys n
--         else    test'  xs ys (n+1)
-- test a b = test' a b 0

test :: String -> String -> Int
test' "" "" n = n
test' "" (y:ys) n = error "error"
test' (x:xs) "" n = error "error"
test' (x:xs) (y:ys) n =
        if      x == y
        then    test'  xs ys n
        else    test'  xs ys (n+1)
test a b = test' a b 0


-- A shorter solution would be:
-- test a b | length a == length b = sum $ map fromEnum $ zipWith (/=) a b
--          | otherwise = error "error" 
-- The zipWith expression generates a list of Bool which is True for every difference. The function fromEnum maps False to 0 and True to 1.

main = do 
	print $ test "alma" "alma"
	print $ test "egy" "ketto"
	print $ test "" ""
