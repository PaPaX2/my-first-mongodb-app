const express = require('express');
const router = express.Router();

const DepartmentMethod = require('../methods/department.method');

router.get('/departments', DepartmentMethod.getAll);

router.get('/departments/:id', DepartmentMethod.getById);

router.get('/departments/random', DepartmentMethod.random);

router.post('/departments', DepartmentMethod.post);

router.put('/departments/:id', DepartmentMethod.put);

router.delete('/departments/:id', DepartmentMethod.delete);

module.exports = router;