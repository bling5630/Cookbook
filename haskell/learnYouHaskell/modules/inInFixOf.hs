import Data.List  

main = do
	print $ "cat" `isInfixOf` "im a cat burglar"  
	print $ "Cat" `isInfixOf` "im a cat burglar" 
	print $ "cats" `isInfixOf` "im a cat burglar" 
	print $ "hey" `isPrefixOf` "hey there!" 
	print $ "hey" `isPrefixOf` "oh hey there!"
	print $ "there!" `isSuffixOf` "oh hey there!"
	print $ "there!" `isSuffixOf` "oh hey there" 
