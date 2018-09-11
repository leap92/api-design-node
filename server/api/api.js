var router = require('express').Router();
var usersRouter = require('./user/userRoutes');
var categoriesRouter = require('./category/categoryRoutes');
var postsRouter = require('./post/postRoutes');

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
router.use('/posts', postsRouter);

module.exports = router;
