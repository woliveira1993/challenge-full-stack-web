const pg = require("../configs/db");


exports.verifyStudentByID = async (idStudent) => {

    try {

        const result = await pg.query('SELECT * FROM tb_students WHERE id_student = $1', [idStudent]);
        return result.rowCount !== 0;

    } catch (err) {

        throw new Error("Ocorreu um erro ao verificar a existência do aluno pelo ID.");

    }
};

exports.verifyStudentByRA = async (ra) => {

    try {

        const result = await pg.query('SELECT * FROM tb_students WHERE ra = $1', [ra]);
        return result.rowCount !== 0;

    } catch (err) {

        throw new Error("Ocorreu um erro ao verificar a existência do aluno pelo RA.");

    }
    
};

exports.getAllStudents = async (pageSize, offset) => {

    try {

        const studentsQuery = await pg.query(`SELECT * FROM tb_students ORDER BY 1 DESC LIMIT $1 OFFSET $2 `, [pageSize, offset])

        const totalQuery = await pg.query(`SELECT COUNT(*) FROM tb_students`);
    
        const students = studentsQuery.rows;
        const totalRecords = parseInt(totalQuery.rows[0].count);
        const totalPages = Math.ceil(totalRecords / pageSize);
    
        return { students, totalPages, totalRecords };

    } catch (err) {

        throw new Error("Ocorreu um erro interno para listar os alunos, entre em contato com nosso suporte.")
    
    }
 
};

exports.addStudent = async (ra, name, email, cpf) => {

    try {

        const raExists = await this.verifyStudentByRA(ra);

        if (raExists) {

            throw new Error("Foi encontrado um aluno com o RA informado, verifique e tente novamente.");

        }

        const insertedStudent = await pg.query(`INSERT INTO tb_students (ra, name, email, cpf) VALUES ($1, $2, $3, $4) RETURNING *`, [ra, name, email, cpf]);

        return({ data: insertedStudent.rows[0], msg: "Aluno cadastrado com sucesso!"});

    } catch (err) {

        throw err;
    
    }


};

exports.editStudent = async (idStudent, name, email) => {

    try{
        
        const idExists = await this.verifyStudentByID(idStudent);

        if (!idExists) {

            throw new Error("Não foi encontrado nenhum aluno com o ID informado, verifique e tente novamente.");

        }

        await pg.query(`UPDATE tb_students SET name = $1, email = $2 WHERE id_student = $3`, [name, email, idStudent]);
        return({ msg: "Aluno alterado com sucesso!" });

    } catch (err) {

        throw err;

    }

};

exports.deleteStudent = async (idStudent) => {

    try{

        const idExists = await this.verifyStudentByID(idStudent);

        if (!idExists) {

            throw new Error("Não foi encontrado nenhum aluno com o ID informado, verifique e tente novamente.");

        }

        await pg.query(`DELETE FROM tb_students WHERE id_student = $1`, [idStudent]);
        return({ msg: "Aluno deletado com sucesso!" });


    } catch (err) {

        throw err;

    }


};
