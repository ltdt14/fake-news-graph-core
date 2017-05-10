# -*- coding: utf-8 -*-
"""
-----------------------------------------------------------------------------

             Social Media Analytics with Python
             Copyright : V2 Maestros @2016
                    
Code Samples :Action Analysis 

Review tweets for a handle. See which hashtags got retweets 
and user mentioned that got shares
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
    
import pandas as pd

hashColumns=["HashTag","Count"]
hashDF =  pd.DataFrame(columns=hashColumns)
userColumns=["User","Count"]
userDF = pd.DataFrame(columns=userColumns)

#Set to a very large ID
maxId=917189147497091072

#Collect last 1000 tweets
for x in range(0,5):
    
    trumpTweets=twitterAPI.statuses.user_timeline( \
        screen_name="realDonaldTrump", \
        max_id=maxId - 1 , \
         count=200)
        
    for tweet in trumpTweets:
        
        #Keep track of last ID
        max_id = tweet["id"]
        #Extract hashtags and retweet counts
        for hashtag in tweet["entities"]["hashtags"]:
            hashDF=hashDF.append(pd.Series([hashtag["text"], \
                tweet["retweet_count"] ], index=hashColumns),\
                ignore_index=True)
        
        #Extract user mentions and share counts
        for mentions in tweet["entities"]["user_mentions"]:
            userDF=userDF.append(pd.Series([mentions["screen_name"], \
                tweet["retweet_count"] ], index=userColumns),\
                ignore_index=True)
                
#Find retweets by hashtag
print hashDF
hashGroupBy=hashDF["Count"].groupby(hashDF.HashTag)
hashGroupBy.sum().order()

#Find shares by user
userGroupBy=userDF["Count"].groupby(userDF.User)
userGroupBy.sum().order()
                




    
    
