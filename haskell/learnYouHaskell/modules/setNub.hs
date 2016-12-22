import qualified Data.Set as Set 
import Data.List 

setNub xs = Set.toList $ Set.fromList xs

main = do
	print $ setNub "HEY WHATS CRACKALACKIN" 
	print $ nub "HEY WHATS CRACKALACKIN" 