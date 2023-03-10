const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getExpense);
router.post("/", controller.addExpense);
router.put("/", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);
router.get("/sum-data", controller.sumExpense);
module.exports = router