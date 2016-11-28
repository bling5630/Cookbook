{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeFamilies #-}

import Yesod
data HelloWorld = HelloWorld
mkYesod "HelloWorld" [$parseRoutes|
/ RootR GET
|]
instance Yesod HelloWorld where
	approot _ = "http://localhost:3000"

getRootR :: Handler HelloWorld RepHtml
getRootR = hamletToRepHtml [$hamlet |
%h1 Hello World!
]
main :: IO ()
main = toWaiApp HelloWorld >>= basicHandler