
main = do
    putStrLn (show2 (Macska2 20 "bela"))
    print (getRuhaMarkaFromAllatIfItIsPulover (Macska3 20 "bela" (Pulover "H&M")))

-- AlgebraicDataTypes
data Allat
    = Macska
    | Kutya
    | Beka

isThisKutya :: Allat -> Bool
isThisKutya Kutya = True
isThisKutya _ = False

isKetto :: Int -> Bool
isKetto 2 = True
isKetto _ = False



-- ADT masik

-- Allat2 : tipus (tipuskonstruktor)
-- Macska2: Adatkonstruktor
data Allat2
    = Macska2 Int String
    | Kutya2 Int String
    | Beka2 Int String
    --deriving (Show)

--Macska2 :: Int -> String -> Allat2

show2 :: Allat2 -> String
show2 (Macska2 kora neve) = "En egy macska vagyok, aki " ++ show kora ++ " eves es " ++ neve ++ "-nak hivjak."
show2 _ = "akarmi"

data AllatRuha
    = Pulover String
    | Polo String

data Allat3
    = Macska3 Int String AllatRuha

getRuhaMarkaFromAllatIfItIsPulover :: Allat3 -> String
getRuhaMarkaFromAllatIfItIsPulover allat@(Macska3 kora@_ neve@_ ruhaja@(Pulover marka)) = marka
getRuhaMarkaFromAllatIfItIsPulover _ = "ez nem kell"

getRuhaMarkaFromAllatIfItIsPulover2 :: Allat3 -> String
getRuhaMarkaFromAllatIfItIsPulover2 x =
    case x of
        (Macska3 _ _ (Pulover marka)) -> marka
        _                             -> "ez nem kell"


ujNevHaNemBelanakHivjakEsReturnAllatEsKora :: Allat3 -> (Allat3, Int)
ujNevHaNemBelanakHivjakEsReturnAllatEsKora (Macska3 kora "Bela" ruha) = (Macska3 kora "Margit" ruha, kora)
ujNevHaNemBelanakHivjakEsReturnAllatEsKora macska@(Macska3 kora _ _) = (macska, kora)



bonyolultAlgebraiSzamolas :: Int -> Int
bonyolultAlgebraiSzamolas x = k
    where
        y = x * 2
        z = y * 7
        k = y + z

bonyolultAlgebraiSzamolas2 :: Int -> Int
bonyolultAlgebraiSzamolas2 x =
    let y = x + 2 in 10 + y


