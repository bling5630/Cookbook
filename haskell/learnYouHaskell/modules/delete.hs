import Data.List  

main = do
	print $ delete 'h' "hey there ghang!"
	print $ delete 'h' . delete 'h' $ "hey there ghang!"  
	print $ delete 'h' . delete 'h' . delete 'h' $ "hey there ghang!" 