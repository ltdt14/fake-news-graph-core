# -*- coding: utf-8 -*-
"""
-----------------------------------------------------------------------------

             Social Media Analytics with Python
             Copyright : V2 Maestros @2016
                    
Code Samples :Real Time Analysis - Sentiment Analysis

Before starting, install package textblob
    pip install textblob
-----------------------------------------------------------------------------
"""
#Setup the home directory.
import os
os.chdir("/Users/tomasztkaczyk/Desktop/Programming/Python-RB/")

consumerKey = 'jykDNnM1hWcv2k6LkSmLNolk2'
consumerSecret = 'ocyATtvX6Ws3BM9KbgpYrgfPGVN6BVrBUW9CpnZmnbRBDrS0qi'
OauthToken = '2353970322-DSZt1XhmmJT6pQSl8Ov3NHy1WuRHiVfw9O34V7J'
OauthSecret = 'et2LO0xiet5rD8sC8LHaBNEcmz1nBgNGa0i1cfmOjMaYa'

import twitter
import json

authInfo = twitter.oauth.OAuth(OauthToken, OauthSecret,
                           consumerKey, consumerSecret)
twitterAPI = twitter.Twitter(auth=authInfo)

from textblob import TextBlob
import sys

twitter_stream=twitter.TwitterStream(auth=authInfo, \
        domain="userstream.twitter.com")
iterator=twitter_stream.user()
for tweet in iterator:
    if "text" in tweet:
        tweetText=tweet["text"]
        activityBlob=TextBlob(tweetText)
        polarity= activityBlob.sentiment.polarity
        
        polarityString="NEUTRAL"
        if polarity > 0 :
            polarityString="POSITIVE"
        elif polarity < 0 :
            polarityString="NEGATIVE"
            
        print polarityString, tweetText
        print "----------"
        sys.stdout.flush()
