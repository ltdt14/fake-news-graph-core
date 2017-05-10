# -*- coding: utf-8 -*-
"""
-----------------------------------------------------------------------------

             Social Media Analytics with Python
             Copyright : V2 Maestros @2016
                    
Code Samples :Frequency Analysis 
-----------------------------------------------------------------------------
"""
#Setup the home directory.
import os
os.chdir("/Users/tomasztkaczyk/Desktop/Programming/Python-RB/")

#Get these keys from your application. Please dont use the one
#that comes with the file
consumerKey = 'jykDNnM1hWcv2k6LkSmLNolk2'
consumerSecret = 'ocyATtvX6Ws3BM9KbgpYrgfPGVN6BVrBUW9CpnZmnbRBDrS0qi'
OauthToken = '2353970322-DSZt1XhmmJT6pQSl8Ov3NHy1WuRHiVfw9O34V7J'
OauthSecret = 'et2LO0xiet5rD8sC8LHaBNEcmz1nBgNGa0i1cfmOjMaYa'

import twitter
import json

#Setup the Twitter API object
authInfo = twitter.oauth.OAuth(OauthToken, OauthSecret,
                           consumerKey, consumerSecret)
twitterAPI = twitter.Twitter(auth=authInfo)
    
#Create an empty Data Frame
import pandas as pd

colList=["Lang","TimeZone","Friends"]
followDF =  pd.DataFrame(columns=colList)
next_cursor=-1

    #Get followers of HP get 1000. Loop 5 times since
    # max count is 200
for x in range(0,5):
    followerList = twitterAPI.followers.list(\
        screen_name="HP", cursor=next_cursor, count=200)
        
    next_cursor=followerList["next_cursor"]

    for follower in followerList["users"]:
        followDF=followDF.append(pd.Series([follower["lang"],\
                       follower["time_zone"],\
                       follower["friends_count"]] ,\
                       index=colList ),\
                       ignore_index=True)

#Analyze the data frame created
followDF.count()

langGroup=followDF.groupby(followDF.Lang)
langGroup.describe()

timezoneGroup=followDF["Friends"].groupby(followDF.TimeZone)
timezoneGroup.describe()
timezoneGroup.count()
timezoneGroup.mean()