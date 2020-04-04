const express = require('express');
const router = express.Router();

const EmployeeMethod = require('../methods/employee.method');

router.get('/employees', EmployeeMethod.getAll);

router.get('/employees/:id', EmployeeMethod.getById);

router.get('/employees/random', EmployeeMethod.getRandom);

router.post('/employees', EmployeeMethod.post);

router.put('/employees/:id', EmployeeMethod.put);

router.delete('/employees/:id', EmployeeMethod.delete);

module.exports = router;