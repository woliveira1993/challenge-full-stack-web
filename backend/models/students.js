const pg = require("../configs/db");

exports.getAllStudents = async (pageSize, offset) => {

    const data = await pg.query(`SELECT * FROM tb_students LIMIT $1 OFFSET $2`, [pageSize, offset]);
    return data.rows;
    
};

exports.getTotalStudentsCount = async () => {
    
    const totalCount = await pg.query(`SELECT COUNT(*) FROM tb_students`);
    return parseInt(totalCount.rows[0].count);

};

exports.addStudent = async (ra, name, email, cpf) => {

    const insertedStudent = await pg.query(`INSERT INTO tb_students (ra, name, email, cpf) VALUES ($1, $2, $3, $4) RETURNING *`, [ra, name, email, cpf]);
    return insertedStudent.rows[0];

};

exports.editStudent = async (idStudent, name, email) => {

    await pg.query(`UPDATE tb_students SET name = $1, email = $2 WHERE id_student = $3`, [name, email, idStudent]);

};

exports.deleteStudent = async (idStudent) => {

    await pg.query(`DELETE FROM tb_students WHERE id_student = $1`, [idStudent]);

};
