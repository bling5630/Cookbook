data MyList a = MyCons a (MyList a)
              | MyNil

showMyListInt :: MyList Int -> String
showMyListInt MyNil = "[]"
showMyListInt (MyCons head tail) = show head ++ " : " ++ showMyListInt tail

addTwoToAllElements :: [Int] -> [Int]
addTwoToAllElements [] = []
addTwoToAllElements (head:tail) = (head + 2) : addTwoToAllElements tail

main = do
    print $ showMyListInt $ MyCons 1 (MyCons 2 (MyCons 3 MyNil))
    print $ addTwoToAllElements [1,7]