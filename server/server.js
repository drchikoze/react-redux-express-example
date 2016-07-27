// var express = require('express');
import express from 'express';
import path from 'path';
import config from '../webpack.config.js';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import passport from 'passport';
import configRoutes from './config/routes';
import configPassport from './config/passport';
import configExpress from './config/express';

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

configPassport(passport);
configExpress(app, passport)
configRoutes(app);

app.use('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});


export default app
