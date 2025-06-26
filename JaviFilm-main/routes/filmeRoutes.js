const express = require("express");
const router = express.Router();
const controller = require("../controllers/filmeController");

router.get("/", controller.getFilmes);
router.post("/", controller.createFilme);
router.put("/:id", controller.updateFilme);
router.delete("/:id", controller.deleteFilme);
router.get("/:id", controller.getFilmePorId);


module.exports = router;
