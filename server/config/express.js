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
    // app.set('views', path.join(__dirname, '..', 'views'));

    app.set('view cache', false);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
    // app.use(methodOverride());
    // app.use(express.static(path.join(__dirname, '../..', 'public')));

    // app.enable('trust proxy');

    app.use(cookieParser());



    // app.use(session(sess));
    // app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
    let mongoStore = connectMongo({
      session: session
    })

    app.use(session({
      saveUninitialized: true,
      resave: true,
      secret: 'secret_text',
      store: new mongoStore({
        mongooseConnection: db.connection
          // collection: 'sessions'
      })
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static('./dist'));
    app.use(express.static('./static'));

    // app.use(flash());


};
