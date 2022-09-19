const express = require('express')
const router = express.Router()


const { getAllCats,createCats, deleteCats  } = require('../controllers/cat')

router.route('/').get(getAllCats).post(createCats)
router.route('/:id').delete(deleteCats)


module.exports = router