data FailableDouble = Failure 
                    | OK Double
  deriving Show

a = Failure
b = OK 3.4

main = do 
	-- print (a,b)
	print (a)	
	print (b)