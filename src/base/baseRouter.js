const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/', roomController.createRoom);

router.route('/').get(roomController.getAllRooms);

router
    .route('/:id')
    .get(roomController.getRoom)
    .patch(roomController.updateRoom)
    .delete(roomController.deleteRoom);

module.exports = router;
