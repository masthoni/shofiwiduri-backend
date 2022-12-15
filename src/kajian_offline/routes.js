const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getKajian_offline);
router.get("/:id", controller.getKajian_offlineById);
router.post("/", controller.addKajian_offline);
router.put("/", controller.updateKajian_offline);
router.delete("/:id", controller.deleteKajian_offline);

module.exports = router