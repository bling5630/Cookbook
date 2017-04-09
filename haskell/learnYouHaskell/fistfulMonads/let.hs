let x = 3
    y = "!"
in show x ++ y

main = do
	print $ Nothing >>= (\x -> Just "!" >>= (\y -> Just (show x ++ y))) 