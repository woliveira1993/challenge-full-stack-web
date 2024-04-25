const StudentModel = require('../models/students');

exports.list = async (req, res) => {
    
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    try {
        
        const { students, totalPages, totalRecords } = await StudentModel.getAllStudents(pageSize, offset);
        
        res.status(200).json({
            page: page,
            pageSize: pageSize,
            totalPages: totalPages,
            totalRecords: totalRecords,
            data: students
        });

    } catch (err) {

        res.status(400).json({ error: err.message });

    }
};

exports.add = async (req, res) => {
    
    const { ra, name, email, cpf } = req.body;

    try {

        const newStudent = await StudentModel.addStudent(ra, name, email, cpf);
        res.status(201).json({ message: newStudent.msg, student: newStudent.data });

    } catch (err) {

        res.status(400).json({ error: err.message });
    }
};

exports.edit = async (req, res) => {

    const { idStudent }   = req.params;
    const { name, email } = req.body;

    try {

        const changeStudent = await StudentModel.editStudent(idStudent, name, email);
        res.status(200).json({ message: changeStudent.msg });

    } catch (err) {

        res.status(400).json({ error: err.message });

    }
};

exports.delete = async (req, res) => {
    const { idStudent } = req.params; 

    try {

        const deleteStudent = await StudentModel.deleteStudent(idStudent);
        res.status(200).json({ message: deleteStudent.msg });

    } catch (err) {

        res.status(400).json({ error: err.message });

    }
};
