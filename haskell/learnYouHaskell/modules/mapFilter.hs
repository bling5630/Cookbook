import qualified Data.Map as Map
import Data.Char

main = do
	print $ Map.map (*100) $ Map.fromList [(1,1),(2,4),(3,9)] 
	print $ Map.map (+100) $ Map.fromList [(1,1),(2,4),(3,9)] 
	print $ Map.filter isUpper $ Map.fromList [(1,'a'),(2,'A'),(3,'b'),(4,'B')]