line :: Int -> Int -> Int -> Int

line a b x = a * x + b

curriedLine a b x = line a b x

defaultLine a b x = curriedLine 1 2 x

main = do 
	print(line 5 5 4) 
	print(curriedLine 5 5 4) 
	print(defaultLine 5 5 4)
	print(defaultLine 5 5 4)
