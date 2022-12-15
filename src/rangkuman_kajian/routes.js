const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getRangkuman_kajian);
router.post("/", controller.addRangkuman_kajian);
router.put("/",  controller.updateRangkuman_kajian);
router.delete("/:id", controller.deleteRangkuman_kajian);

module.exports = router