const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');

let app = express();

mongoose.connect(config.db.url, { useNewUrlParser: true, useCreateIndex: true })
    .catch(err => {
        console.log(err);
        process.exit();
    });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Includes for routes
require('./routes/api/general')(app);
require('./routes/api/user')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // build error payload, only providing error in development
    let payload = {
        errorMessage: err.message,
        status: err.status,
        stackTrace: req.app.get('env') === 'development' ? err.stack : {}
    };

    res.status(err.status || 500);
    res.json(payload);
});

module.exports = app;
