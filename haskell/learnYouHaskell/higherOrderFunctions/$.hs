($$) :: (a -> b) -> a -> b
($$) f x = f x

main = print $ map ($ 3) [(4+), (10*), (^2), sqrt]  