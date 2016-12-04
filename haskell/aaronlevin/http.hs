{-# LANGUAGE OverloadedStrings #-}

module Main where

import Network.Wai (pathInfo, Request, requestMethod, Response, responseLBS, ResponseReceived)
import Network.Wai.Handler.Warp (run)
import Network.HTTP.Types (status200, status401)

-- note: type Application = Request -> (Response -> IO ResponseReceived) -> IO ResponseReceived
application :: Request -> (Response -> IO ResponseReceived) -> IO ResponseReceived
application req continuation =
  let method = requestMethod req
      path = pathInfo req
   in case (method, path) of
        ("GET", ["hello" , "world"]) ->
          continuation (responseLBS status200 [] "hello tamas!")
        _ ->
          continuation (responseLBS status401 [] "ERROR")

main :: IO ()
main = run 8080 application

{-
$ curl -iXGET 'localhost:8080/hello/world'
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Date: Wed, 30 Nov 2016 10:33:23 GMT
Server: Warp/3.2.8
!
$ curl -iXGET 'localhost:8080/hello/wd'
HTTP/1.1 401 Unauthorized
Transfer-Encoding: chunked
Date: Wed, 30 Nov 2016 10:33:29 GMT
Server: Warp/3.2.8
ERROR
$ curl -iXGET 'localhost:8080/hel'
HTTP/1.1 401 Unauthorized
Transfer-Encoding: chunked
Date: Wed, 30 Nov 2016 10:33:34 GMT
Server: Warp/3.2.8
ERROR
-}