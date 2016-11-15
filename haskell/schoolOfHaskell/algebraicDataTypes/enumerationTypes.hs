data Thing = Shoe
           | Ship
           | SealingWax
           | Cabbage
           | King
  deriving Show

shoe :: Thing
shoe = Shoe
listO'Things :: [Thing]
listO'Things = [Shoe, SealingWax, King, Cabbage, King]

-- original version

isSmall :: Thing -> Bool
isSmall Shoe       = True
isSmall Ship       = False
isSmall SealingWax = True
isSmall Cabbage    = True
isSmall King       = False

-- shorter version

isSmall2 :: Thing -> Bool
isSmall2 Ship       = False
isSmall2 King       = False
isSmall2 _ 			= True

main = do 
	print (isSmall Cabbage)
	print (isSmall Shoe)
	print (isSmall Ship)
	print (isSmall SealingWax)
	print (isSmall King)
	print (listO'Things)
	print (isSmall2 Cabbage)
	print (isSmall2 Shoe)
	print (isSmall2 Ship)
	print (isSmall2 SealingWax)
	print (isSmall2 King)

