// USING MODIFIED CODE FROM https://github.com/shawnmccarthy/week4

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

var router = express.Router();

router.route('/')
    .post(function (req, res) {
            console.log(req.body);
            res = res.status(200);
            res.send(req.body);
        }
    );


app.use('/', router);
app.listen(process.env.PORT || 8080);