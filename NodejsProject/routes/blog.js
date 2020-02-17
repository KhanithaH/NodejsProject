var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('blog');
});

router.get('/add', function(req, res, next) {
    res.render('addblog');
});

router.post('/add',[
    check("name","Please Input your blog name").not().isEmpty(),
    check("description","Please Input your blog description").not().isEmpty(),
    check("author","Please Input your blog author").not().isEmpty(),
], function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors);
    }
});
module.exports = router;
