const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router.get("/", controller.getPostingan_artikel);
router.get("/:kategori", controller.getPostingan_artikelbykategori);
router.post("/", controller.addPostingan_artikel);
router.put("/", controller.updatePostingan_artikel);
router.delete("/:id", controller.deletePostingan_artikel);

module.exports = router