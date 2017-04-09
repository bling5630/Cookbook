wtype Birds = Int  
type Pole = (Birds,Birds)

landLeft :: Birds -> Pole -> Pole  
landLeft n (left,right) = (left + n,right)  
  
landRight :: Birds -> Pole -> Pole  
landRight n (left,right) = (left,right + n)  

x -: f = f x  

main = do
	print $ landLeft 2 (0,0)
	print $ landRight 1 (1,2)  
	print $ landRight (-1) (1,2) 
	print $ landLeft 2 (landRight 1 (landLeft 1 (0,0)))
	print $ 100 -: (*3)
	print $ True -: not 
	print $ (0,0) -: landLeft 2  
	print $ (0,0) -: landLeft 1 -: landRight 1 -: landLeft 2 
	print $ landLeft 10 (0,3)  
	print $ (0,0) -: landLeft 1 -: landRight 4 -: landLeft (-1) -: landRight (-2) 
