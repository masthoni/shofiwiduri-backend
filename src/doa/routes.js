const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getDoa);
router.post("/", controller.addDoa);
router.put("/", controller.updateDoa);
router.delete("/:id", controller.deleteDoa);

module.exports = router