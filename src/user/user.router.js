const express = require('express');
const router = express.Router();
const userService = require('../user/user.service');
const authService = require('../auth/auth.service');

router.post('/login', authService.login);
router.post('/register', authService.signup);
router.post('/test', (req, res, next) => {
  try {
    let test = req.body;
    console.log(test);
    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
});

// -- Protect all routes after this middleware
router.use(authService.protect);

// router.delete('/deleteMe', userService.deleteMe);

// -- Only admin have permission to access for the below APIs
// router.use(authService.restrictTo('admin'));

router.route('/').get(userService.getAllUsers);

router
  .route('/:id')
  .get(userService.getUser)
  .patch(userService.updateUser)
  .delete(userService.deleteUser);

module.exports = router;
