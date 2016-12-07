doesNotWork :: Maybe Int
doesNotWork = do
	Just 6
	Nothing
	-- putStrLn "Hello"
	-- return 5

main :: IO ()
main = print $ Just doesNotWork