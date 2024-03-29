# -*- coding: utf-8 -*-
"""
-----------------------------------------------------------------------------

             Social Media Analytics with Python
             Copyright : V2 Maestros @2016
                    
Code Samples :Link Analysis 

Find common friends between two handles. Then find who their
common friends are.
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

# Get friends of Vika7
vikaFriends = twitterAPI.friends.list(\
        screen_name="vika7", count=200)
vikaList=[]
for vfriend in vikaFriends["users"]:
    vikaList.append( vfriend["screen_name"] )

#Get friends of CaroWozniacki
caroFriends = twitterAPI.friends.list(\
        screen_name="CaroWozniacki", count=200)
caroList=[]
for cfriend in caroFriends["users"]:
    caroList.append( cfriend["screen_name"] )
        
#Compare their friends.
print "Vika's friends : ", len(vikaList)
print "Caro's friends : ", len(caroList)
print "Mutual friends : ", \
    len(set(vikaList) & set(caroList))
    
#Find who do their friends follow and most popular among friends
commonFriends = list(set(vikaList) & set(caroList))
secLevel= []

#Doing only 10 scans since it will exceed rate limits
for friend in commonFriends[:5]:
    secFriends= twitterAPI.friends.list(\
        screen_name=friend, count=200)
    for secFriend in secFriends["users"]:
        secLevel.append(secFriend["screen_name"])
        
print "Total second level friends ", len(secLevel)

from collections import Counter
friendCounts = Counter(secLevel)

#Find the top 10 common friends among these common friends
for friend in friendCounts.most_common(10):
    print friend





    
    
