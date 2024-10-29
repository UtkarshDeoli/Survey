const express = require('express');
const { createRole, updateRole, getRoles, getAllRoles } = require('../controllers/roleController');
const router = express.Router();

router.post('/create',createRole)
router.post('/update',updateRole)
router.get('/roles',getRoles)
router.get('/allRoles',getAllRoles)

module.exports = router;