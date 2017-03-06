import qualified Data.ByteString.Lazy as B  
import qualified Data.ByteString as S  

main = do
	print $ B.pack [99,97,110] 
	print $ B.pack [98..120] 
	print $ B.fromChunks [S.pack [40,41,42], S.pack [43,44,45], S.pack [46,47,48]] 
	print $ B.cons 85 $ B.pack [80,81,82,84] 
	print $ B.cons' 85 $ B.pack [80,81,82,84]
	print $ foldr B.cons B.empty [50..60]
	print $ foldr B.cons' B.empty [50..60]  