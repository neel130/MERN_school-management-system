const express = require("express");
const { getStudents, createStudents } = require("../controllers/StudentController");
const router = express.Router();


router.get("/", getStudents);
router.post("/create", createStudents);




module.exports = router;