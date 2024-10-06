const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const jwtController = require("../controllers/jwt.controller");

const todoValidationRules = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),
    body('priority')
        .isInt({ min: 1, max: 5 })
        .withMessage('Priority must be an integer between 1 and 5')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.get("/", todoController.read);
router.get("/:id", todoController.readOne); 
router.post("/", todoValidationRules, validate, todoController.create);
router.put("/:id", todoValidationRules, validate, todoController.update);
router.delete("/:id", todoController.delete);

router.get("/token", jwtController.getToken);
router.post("/verify", jwtController.verifyToken);

module.exports = router;