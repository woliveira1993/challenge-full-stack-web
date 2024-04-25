const studentsController = require('../controllers/students');
const StudentModel = require('../models/students');

jest.mock('../models/students');

describe('Students Controller', () => {
  describe('list', () => {
    it('deve retornar uma lista de alunos', async () => {
      const req = { query: {} };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const students = [{ id: 1, name: 'Joao Maria' }, { id: 2, name: 'Maria Silva' }];
      const totalPages = 2;
      const totalRecords = 10;

      StudentModel.getAllStudents.mockResolvedValueOnce({ students, totalPages, totalRecords });

      await studentsController.list(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        page: 1,
        pageSize: 10,
        totalPages,
        totalRecords,
        data: students,
      });
    });

    it('deve tratar erros', async () => {
      const req = { query: {} };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const errorMessage = 'Internal Server Error';
      StudentModel.getAllStudents.mockRejectedValueOnce(new Error(errorMessage));

      await studentsController.list(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  // Teste para a função add
  describe('add', () => {
    it('deve adicionar um novo aluno', async () => {
      const req = { body: { ra: '123456', name: 'Washington Oliveira', email: 'washington.oliver@email.com', cpf: '12345678900' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const newStudent = { id: 1, ra: '123456', name: 'Joao Silva', email: 'joaosilva@email.com', cpf: '12345678900' };
      const successMessage = 'Aluno adicionado com sucesso.';

      StudentModel.addStudent.mockResolvedValueOnce({ data: newStudent, msg: successMessage });

      await studentsController.add(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: successMessage, student: newStudent });
    });

    it('deve tratar os erros', async () => {
      const req = { body: {} };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const errorMessage = 'Internal Server Error';
      StudentModel.addStudent.mockRejectedValueOnce(new Error(errorMessage));

      await studentsController.add(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('edit', () => {
    it('deve editar um aluno existente', async () => {
      const req = { params: { idStudent: 1 }, body: { name: 'Washington Oliveira', email: 'washington.oliver@email.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const successMessage = 'Aluno alterado com sucesso.';

      StudentModel.editStudent.mockResolvedValueOnce({ msg: successMessage });

      await studentsController.edit(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: successMessage });
    });

    it('deve tratar os erros', async () => {
      const req = { params: { idStudent: 1 }, body: {} };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const errorMessage = 'Internal Server Error';
      StudentModel.editStudent.mockRejectedValueOnce(new Error(errorMessage));

      await studentsController.edit(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('delete', () => {
    it('deve deletar um aluno existente', async () => {
      const req = { params: { idStudent: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const successMessage = 'Aluno deletado com sucesso.';

      StudentModel.deleteStudent.mockResolvedValueOnce({ msg: successMessage });

      await studentsController.delete(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: successMessage });
    });

    it('deve tratar os erros', async () => {
      const req = { params: { idStudent: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const errorMessage = 'Internal Server Error';
      StudentModel.deleteStudent.mockRejectedValueOnce(new Error(errorMessage));

      await studentsController.delete(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
