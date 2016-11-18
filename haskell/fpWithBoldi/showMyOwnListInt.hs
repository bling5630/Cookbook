data MyList a = MyCons a (MyList a)
              | MyNil

showMyListInt :: MyList Int -> String
showMyListInt MyNil = "[]"
showMyListInt (MyCons head tail) = show head ++ " : " ++ showMyListInt tail

main = do
	print $ showMyListInt $ MyCons 1 (MyCons 2 (MyCons 3 MyNil))	
	print $ showMyListInt $ MyCons 4 (MyCons 5 (MyCons 6 MyNil))