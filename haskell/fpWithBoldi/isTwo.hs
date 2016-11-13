ketto :: Int
ketto = 2

isTwo :: Double -> Bool
isTwo x =
    if (x == 2)
        then True
        else False

isTwo2 :: Double -> Bool
isTwo2 x
    | x == 2 = True
    | otherwise = False

isTwoOrFour :: Int -> Bool
isTwoOrFour x =
    if (x == 2)
        then True
        else if (x == 4)
            then True
            else False

main = do 
    print (isTwo 2)
    print (isTwo 3)    
    print (isTwo 2)    
    print (isTwo 5)    
    print (isTwo 2)    
    print (isTwo2 7)
    print (isTwoOrFour 4)
    print (isTwoOrFour 5)

-- == , /=