let stock = [(994.4,2008,9,1),(995.2,2008,9,2),(999.2,2008,9,3),(1001.4,2008,9,4),(998.3,2008,9,5)] 

main = do
	print $ dropWhile (/=' ') "This is a sentence"  
	print $ dropWhile (<3) [1,2,2,2,3,4,5,4,3,2,1]
	print $ head (dropWhile (\(val,y,m,d) -> val < 1000) stock)
