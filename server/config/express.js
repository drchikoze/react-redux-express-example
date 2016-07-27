import express from 'express';
import cookieParser from 'cookie-parser';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'express-flash';

export default function (app, passport) {
    var db = mongoose.connect('mongodb://localhost/my_test')
    app.disable('x-powered-by');

    app.set('view cache', false);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.use(cookieParser());


    let mongoStore = connectMongo({
      session: session
    })

    app.use(session({
      saveUninitialized: true,
      resave: true,
      secret: 'secret_text',
      store: new mongoStore({
        mongooseConnection: db.connection
      })
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static('./dist'));
    app.use(express.static('./static'));

};
