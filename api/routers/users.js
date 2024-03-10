const express = require('express')
const router = express.Router()
const {getAllUsers, createUser, getById, deleteUser, updateUser} = require('../controllers/userController')

router.get('/', getAllUsers )
router.post('/', createUser)
router.get('/:id', getById)
router.delete('/:id', deleteUser)
//Update put or patch
router.put('/:id', updateUser)
router.patch('/:id', updateUser)
router.patch('/:id', (req, res) =>{
    res.send("Patch")
})


module.exports = router