'use strict';

module.exports = {
    db: process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://localhost/mydb',
    app: {
        name: 'trilog'
    },
    facebook: {
        clientID: '668421416532462',
        clientSecret: '24be4786477810342300af3c4fd2c38e',
        callbackURL: 'http://trilog.herokuapp.com/auth/facebook/callback'
    },
    twitter: {
        clientID: '939vQVcYsLYKk9orDD2g',
        clientSecret: 'mUWkkSokNMawTW7jBJ209xAqsum46KapXlHLIn1miH0',
        callbackURL: 'http://www.trilog.tk/auth/twitter/callback'
    },
    github: {
        clientID: '0cb225c1506386e5c7fe',
        clientSecret: '219afdbde14ec1997621cdb5b508fe096c2050b1',
        callbackURL: 'http://www.trilog.tk/auth/github/callback'
    },
    google: {
        clientID: '889287255530-j81o8vbgsq028mlgu2gcrblcqn32oqso.apps.googleusercontent.com',
        clientSecret: 'VG1kwJxnvVORfnquqaGP9df7',
        callbackURL: 'http://www.trilog.tk/auth/google/callback'
    },
    linkedin: {
        clientID: 'd6c7cb4a-d9cd-452c-934b-0e375c2ad67a',
        clientSecret: '73c2a9b9-da96-4f44-8c22-b4ca7312d485',
        callbackURL: 'http://www.trilog.tk/auth/linkedin/callback'
    }
};
