// students/index.js
import axios from 'axios';
import { useToast } from 'vue-toastification'

const state = {
  toast: useToast(),
  students: [],
};

const mutations = {
  TOAST_SUCCESS_STUDENT: (state, message) => {
    state.toast.success(message, { timeout: 3000 });
  },
  TOAST_ERROR_STUDENT: (state, message) => {
    state.toast.error(message, { timeout: 3000 });
  },
  setStudents(state, payload) {
    state.students = payload;
  },
  addStudent(state, student) {
    state.students.data.push(student);
  },
  editStudent(state, newStudent) {
    const index = state.students.data.findIndex((x) => x.id_student == newStudent.id_student);
    state.students.data[index] = newStudent;
  },
  deleteStudent(state, idStudent) {
    const index = state.students.data.findIndex((x) => x.id_student == idStudent);
    state.students.data.splice(index, 1);
  },
};

const actions = {
  async fetchStudents({ commit, getters }, pagination) {
    try {
      const token = getters.authToken;
      const response = await axios.get(`http://localhost:5000/v1/students?page=${pagination.page}&pageSize=${pagination.pageSize}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const students = response.data;
      commit('setStudents', students);
    } catch (error) {
      commit('TOAST_ERROR_STUDENT', error.response.data.error);
    }
  },
  async addStudent({ commit, getters }, newStudent) {
    try {
      const token = getters.authToken;
      const response = await axios.post('http://localhost:5000/v1/students', newStudent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const studentReturn = response.data.student;
      commit('TOAST_SUCCESS_STUDENT', "Aluno cadastrado com sucesso.");
      commit('addStudent', studentReturn);
    } catch (error) {
      commit('TOAST_ERROR_STUDENT', error.response.data.error);
    }
  },
  async editStudent({ commit, getters }, { idStudent, newStudent }) {
    try {

      const token = getters.authToken;
      const response = await axios.put(`http://localhost:5000/v1/students/${idStudent}`, newStudent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit('TOAST_SUCCESS_STUDENT', "Aluno editado com sucesso.");
      commit('editStudent', newStudent);
    } catch (error) {
      commit('TOAST_ERROR_STUDENT', error.response.data.error);
    }
  },
  async deleteStudent({ commit, getters }, idStudent) {
    try {
      const token = getters.authToken;
      await axios.delete(`http://localhost:5000/v1/students/${idStudent}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      commit('TOAST_SUCCESS_STUDENT', "Aluno deletado com sucesso.");
      commit('deleteStudent', idStudent);
    } catch (error) {
      commit('TOAST_ERROR_STUDENT', error.response.data.error);
    }
  },
};

const getters = {
  getAllStudents: state => state.students,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
