var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use((req,res,next) => {
   console.log("in the index router")
   next()
})

router.get('/bio',
  (req,res,next) => {
   console.log("in the index router")
   next()
  },
  (req,res,next) => {
    res.render('bio')
  }
)

router.get('/share',
  (req,res,next) => {
   console.log("in the index router")
   next()
  },
  (req,res,next) => {
    res.render('share')
  }
)

router.get('/main',
  (req,res,next) => {
   console.log("in the index router")
   next()
  },
  (req,res,next) => {
    res.render('main')
  }
)

router.get('/login',
  (req,res,next) => {
   console.log("in the index router")
   next()
  },
  (req,res,next) => {
    res.render('login')
  }
)

module.exports = router;
