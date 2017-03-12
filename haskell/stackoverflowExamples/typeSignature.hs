getlist _  []=[]
getlist [] _ = []
getlist (x:xs) ys = if isexist x ys
             then x++ getlist xs ys
                   else
                      getlist xs ys
isexist a [] = False
isexist a (x:xs) = if a == x
          then True
          else isexist a xs

main = do
	print $ isexist 1 [1,2,3,4,5,6,7]	
	print $ isexist 7 [1,2,3,4,5,6]	
	print $ isexist 3 [1,2,3,4,5]