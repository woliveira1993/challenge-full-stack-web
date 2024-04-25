import StudentModal from '../../components/modal/student/index.vue';
import HeaderNav from '../../components/headerNav/index.vue';

export default {
  name: 'Students',
  components: {
    StudentModal,
    HeaderNav
  },
  computed: {
    students() {
      return this.$store.getters.getAllStudents;
    },
    totalPages() {
      return Math.ceil(this.students.totalRecords / this.pagination.itemsPerPage);
    }
  },
  data() {
    return {
      headers: [
        { title: 'ID.', value: 'id_student', key: 'id_student' },
        { title: 'Nome', value: 'name', key: 'name' },
        { title: 'RA', value: 'ra', key: 'ra' },
        { title: 'CPF', value: 'cpf', key: 'cpf' },
        { title: 'Email', value: 'email', key: 'email' },
        { title: 'Ação', value: 'action', sortable: false },
      ],
      search: '',
      pagination: { page: 1, itemsPerPage: 5 },
    };
  },
  async mounted() {
    await this.fetchData();
  },
  watch: {
    'pagination.page'(value) {
      this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('fetchStudents', {
        page: this.pagination.page,
        pageSize: this.pagination.itemsPerPage
      });
    },

    openModalStudent(item, operation) {
        this.$refs.studentModal.openModal(item, operation);
      },

    logOut() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
    },
    
  },
};