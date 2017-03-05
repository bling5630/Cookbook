module Main where

main :: IO ()

main = print $ (show (yesno (12 :: Int)))

-- main :: IO ()
-- main = putStrLn ( show (yesno 12) )
-- class YesNo a where
--     yesno :: a -> Bool
-- instance YesNo Bool where
--     yesno b = b
-- instance YesNo [a] where
--     yesno [] = False
--     yesno _ = True
-- instance YesNo Int where
--     yesno 0 = False
--     yesno _ = True

class YesNo a where
     yesno  ::  a -> Bool

instance YesNo Int where
     yesno 0    =   False
     yesno _    =   True


instance YesNo Integer where
     yesno 0    =   False
     yesno _    =   True


