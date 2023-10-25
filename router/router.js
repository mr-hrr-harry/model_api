const express = require('express')
const router = express.Router()

const {getOne, getAll, putOne, updateOne, delOne} = require('../controller/handler.js')

router.route('/').get(getAll).put(putOne)
router.route('/:ID').get(getOne).patch(updateOne).delete(delOne)

module.exports = router