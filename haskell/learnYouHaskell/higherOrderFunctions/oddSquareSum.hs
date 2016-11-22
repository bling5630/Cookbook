-- oddSquareSum :: Integer  
-- oddSquareSum = sum (takeWhile (<10000) (filter odd (map (^2) [1..])))   

-- oddSquareSum :: Integer  
-- oddSquareSum = sum . takeWhile (<10000) . filter odd . map (^2) $ [1..]  

oddSquareSum :: Integer  
oddSquareSum =   
    let oddSquares = filter odd $ map (^2) [1..]  
        belowLimit = takeWhile (<10000) oddSquares  
    in  sum belowLimit 

main = print oddSquareSum