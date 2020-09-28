const express = require("express")
const router = express.Router()

const employeeController = require("../controllers/employee_controller")
const artikelController = require("../controllers/artikel_controller")

router.get('/', employeeController.findAll)
router.post('/create', employeeController.create)
router.get('/detail/:id', employeeController.findById)
router.post('/update/:id', employeeController.update)
router.delete('/delete/:id', employeeController.delete)

router.get('/artikel', artikelController.findAll)

module.exports = router