const pg = require("../configs/db");

exports.getAllStudents = async (pageSize, offset) => {

    try {

        const studentsQuery = await pg.query(`SELECT * FROM tb_students LIMIT $1 OFFSET $2`, [pageSize, offset])

        const totalQuery = await pg.query(`SELECT COUNT(*) FROM tb_students`);
    
        const students = studentsQuery.rows;
        const totalRecords = parseInt(totalQuery.rows[0].count);
        const totalPages = Math.ceil(totalRecords / pageSize);
    
        return { students, totalPages, totalRecords };

    } catch (err) {

        throw err;
       
    
    }
 
};

exports.addStudent = async (ra, name, email, cpf) => {

    try {

        const verifyRA = await pg.query('SELECT * FROM tb_students WHERE ra = $1', [ ra ]);

        if(verifyRA.rowCount != 0 ){

            throw new Error("Foi encontrado um aluno com o RA informado, verifique e tente novamente.")

        }
        
        const insertedStudent = await pg.query(`INSERT INTO tb_students (ra, name, email, cpf) VALUES ($1, $2, $3, $4) RETURNING *`, [ra, name, email, cpf]);

        return({ data: insertedStudent.rows[0], msg: "Aluno cadastrado com sucesso!"});

    } catch (err) {

        throw err;
    
    }


};

exports.editStudent = async (idStudent, name, email) => {

    try{
        
        const verifyIDExists = await pg.query('SELECT * FROM tb_students WHERE id_student = $1', [ idStudent ]);

        if(verifyIDExists.rowCount == 0 ){

            throw new Error("Não foi encontrado nenhum aluno com os dados informados, não foi possível prosseguir com a alteração.")

        }

        await pg.query(`UPDATE tb_students SET name = $1, email = $2 WHERE id_student = $3`, [name, email, idStudent]);
        return({ msg: "Aluno alterado com sucesso!" });

    } catch (err) {

        throw err;

    }

};

exports.deleteStudent = async (idStudent) => {

    try{

        const verifyIDExists = await pg.query('SELECT * FROM tb_students WHERE id_student = $1', [ idStudent ]);

        if(verifyIDExists.rowCount == 0 ){

            throw new Error("Não foi encontrado nenhum aluno com os dados informados, não foi possível prosseguir com a exclusão.")

        }

        await pg.query(`DELETE FROM tb_students WHERE id_student = $1`, [idStudent]);
        return({ msg: "Aluno deletado com sucesso!" });


    } catch (err) {

        throw err;

    }


};
