-- 6 Problem 6
-- (*) Find out whether a list is a palindrome. A palindrome can be read forward or backward; e.g. (x a m a x).
-- Example in Haskell:
-- *Main> isPalindrome [1,2,3]
-- False
-- *Main> isPalindrome "madamimadam"
-- True
-- *Main> isPalindrome [1,2,4,8,16,8,4,2,1]
-- True

isPalindrome :: (Eq a) => [a] -> Bool
isPalindrome []  = True
isPalindrome [_] = True
isPalindrome myElem = myElem == reverse myElem 

isPalindromeSecond :: (Eq a) => [a] -> Bool
isPalindromeSecond []  = True
isPalindromeSecond [_] = True
isPalindromeSecond word = (head word == last word) && isPalindromeSecond middle
  where middle = (init . tail) word

main = do
	print $ isPalindrome "121"
	print $ isPalindrome "majom"
	print $ isPalindrome "1213"
	print $ isPalindrome "eke"
	print $ isPalindrome "kiraly"
	print $ isPalindrome "axa"
	print $ isPalindrome "__"
	print $ isPalindrome "_*_"
	print $ isPalindrome "1"
	print $ isPalindromeSecond "magyar"
	print $ isPalindromeSecond "12345"
	print $ isPalindromeSecond "12321"
	print $ isPalindromeSecond "jaj"
	print $ isPalindromeSecond "__"
	print $ isPalindromeSecond "_*_"
	print $ isPalindromeSecond "1"