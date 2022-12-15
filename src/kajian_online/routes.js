const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getKajian_online);
router.get("/:id", controller.getKajian_onlineById);
router.post("/", controller.addKajian_online);
router.put("/", controller.updateKajian_online);
router.delete("/:id", controller.deleteKajian_online);

module.exports = router