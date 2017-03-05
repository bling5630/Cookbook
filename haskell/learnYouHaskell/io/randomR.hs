randomR :: (RandomGen g, Random a) :: (a, a) -> g -> (a, g)

main = print $ randomR (1,6) (mkStdGen 359353) 