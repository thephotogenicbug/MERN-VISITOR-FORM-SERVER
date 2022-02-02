const express = require('express')
const router = express.Router()
const {createVisitor} = require('../controllers/visitorController')

router.route('/visitor/new').post(createVisitor)
module.exports = router;