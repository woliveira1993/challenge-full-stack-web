const express = require('express');
const router = express.Router();
const studentsController = require("../controllers/students");
const middleware = require("../middleware/index")

router.get('/', middleware, studentsController.list);

router.post('/', middleware, studentsController.add);

router.put('/:idStudent', middleware, studentsController.edit);

router.delete('/:idStudent', middleware, studentsController.delete);



module.exports = router;