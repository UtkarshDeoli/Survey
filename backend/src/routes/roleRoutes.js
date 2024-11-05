const express = require('express');
const { createRole, updateRole, getRoles, getAllRoles, deleteRole } = require('../controllers/roleController');
const router = express.Router();

router.post('/create',createRole)
router.post('/update',updateRole)
router.get('/roles',getRoles)
router.get('/allRoles',getAllRoles)
router.post('/delete',deleteRole)

module.exports = router;