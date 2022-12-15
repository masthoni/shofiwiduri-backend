const { Router } = require('express')
const router = Router()

const controller = require('./controller')

router.get("/", controller.getKategori);
router.post("/", controller.addKategori);
router.put("/", controller.updateKategori);
router.delete("/:id", controller.deleteKategori);

module.exports = router