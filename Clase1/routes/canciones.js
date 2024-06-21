const express = require('express'),
    router = express.Router(),
    cancion = require('../controllers/controller_cancion');

router.use('/canciones', cancion);
module.exports = router;
