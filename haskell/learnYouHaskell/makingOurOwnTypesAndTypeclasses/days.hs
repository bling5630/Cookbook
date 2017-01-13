data Day = Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday   
           deriving (Eq, Ord, Show, Read, Bounded, Enum) 

main = do
	print $ Wednesday
	print $ show Wednesday  
	print $ Saturday == Sunday  
	print $ Saturday == Saturday 
	print $ Saturday > Friday  
	print $ Monday `compare` Wednesday 
	print $ succ Monday 
	print $ pred Saturday 
	print $ [Thursday .. Sunday] 
