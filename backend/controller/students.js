const StudentModel = require('../models/students');

exports.list = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    try {
        const students = await StudentModel.getAllStudents(pageSize, offset);
        const totalRecords = await StudentModel.getTotalStudentsCount();
        const totalPages = Math.ceil(totalRecords / pageSize);

        res.status(200).json({
            page: page,
            pageSize: pageSize,
            totalPages: totalPages,
            totalRecords: totalRecords,
            data: students
        });
    } catch (err) {
        console.error("Erro ao buscar estudantes:", err);
        res.status(500).json({
            error: "Ocorreu um erro ao buscar os estudantes."
        });
    }
};

exports.add = async (req, res) => {

    const { ra, name, email, cpf } = req.body;

    try {
        const newStudent = await StudentModel.addStudent(ra, name, email, cpf);
        res.status(201).json({ message: "Estudante adicionado com sucesso", student: newStudent });
    } catch (err) {
        console.error("Erro ao adicionar estudante:", err);
        res.status(500).json({ error: "Ocorreu um erro ao adicionar o estudante." });
    }

};

exports.edit = async (req, res) => {

    const { idStudent, name, email } = req.body;

    try {
        await StudentModel.editStudent(idStudent, name, email);
        res.status(200).json({ message: "Estudante atualizado com sucesso." });
    } catch (err) {
        console.error("Erro ao editar estudante:", err);
        res.status(500).json({ error: "Ocorreu um erro ao editar o estudante." });
    }

};

exports.delete = async (req, res) => {

    const { idStudent } = req.params; 

    try {
        await StudentModel.deleteStudent(idStudent);
        res.status(200).json({ message: "Estudante removido com sucesso." });
    } catch (err) {
        console.error("Erro ao deletar estudante:", err);
        res.status(500).json({ error: "Ocorreu um erro ao deletar o estudante." });
    }
    
};
