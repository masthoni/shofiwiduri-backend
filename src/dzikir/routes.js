const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getDzikir);
router.post("/", controller.addDzikir);
router.put("/", controller.updateDzikir);
router.delete("/:id", controller.deleteDzikir);

module.exports = router