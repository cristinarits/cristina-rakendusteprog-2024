const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const jwtController = require("../controllers/jwt.controller");

router.get("/", todoController.read);
router.get("/:id", todoController.readOne); 
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

router.get("/token", jwtController.getToken);
router.post("/verify", jwtController.verifyToken);

module.exports = router;