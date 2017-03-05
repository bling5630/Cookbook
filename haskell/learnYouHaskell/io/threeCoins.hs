import System.Random 

threeCoins :: StdGen -> (Bool, Bool, Bool)  
threeCoins gen =   
    let (firstCoin, newGen) = random gen  
        (secondCoin, newGen') = random newGen  
        (thirdCoin, newGen'') = random newGen'  
    in  (firstCoin, secondCoin, thirdCoin)  

main = do 
	print $	threeCoins (mkStdGen 21)  
	print $	threeCoins (mkStdGen 22)  
	print $	threeCoins (mkStdGen 943)
	print $ threeCoins (mkStdGen 944) 
	print $ (take 5 $ randoms (mkStdGen 11) :: [Int])
	print $ (take 5 $ randoms (mkStdGen 11) :: [Bool])
	print $ (take 5 $ randoms (mkStdGen 11) :: [Float])

