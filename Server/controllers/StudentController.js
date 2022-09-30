const Student = require("../models/StudentSchema");

exports.getStudents = async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(200).send(studentData);
    } catch (error) {
        res.status(404).send({ massage: error.massage });
    }
};

exports.createStudents = async (req, res) => {
    const newStudents = req.body;

    try {
        const studentData = await Student.create(newStudents);
        res.json(studentData);
    } catch (error) {
        res.status(400).send({ massage: error.massage });
    }
};
