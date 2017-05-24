'use strict';

var passport = require('passport'),
  LdapStrategy = require('passport-ldapauth'),
  User = require('mongoose').model('User');

    //Server setting shoudl be importend from the config file
    //config = require('../config');

var loginSuccess = function(userLdap, done) {
    // console.log(done);
    //console.log(userLdap);
    var user;
  User.findOne({
    username: userLdap.uid
    }, function(err, user) {
          //console.log(userLdap);
          //console.log(user);
          if (err) {
              return done(err);
            }
          if (!user) {
              //console.log(userLdap);
                user = new User({
                  firstName: userLdap.givenName,
                  lastName:userLdap.sn,
                  username: userLdap.uid,
                  displayName: userLdap.uid,
                  email: userLdap.mail,
                  provider: 'ldap'
              });
              user.save(function(err) {
                  return done(err, user); // Error happens here
              });
            } else {
              return done(err, user); // Error happens here
            }
    });
};
module.exports = function() {
    passport.use(new LdapStrategy({
            server: {
                url: 'ldap://192.168.99.100:389',
                bindDn: 'cn=admin,dc=example,dc=org',
                bindCredentials: 'admin',
                searchBase: 'ou=Users,dc=example,dc=org',
                searchFilter: '(uid={{username}})'
                //searchAttributes: config.ldap.searchAttributes
            },
            passReqToCallback: false,
            usernameField: 'username',
            passwordField: 'password'
        }, loginSuccess
    ));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }).exec(function(err, user) {
            done(err, user);
        });
    });

};
