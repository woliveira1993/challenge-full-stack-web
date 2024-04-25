export default {
  name: 'Login',

  computed: {

    isAuthenticated() {

      return this.$store.getters.isAuthenticated;

    },

  },
  data() {

    return {
      email: '',
      password: '',
    };
  },

  watch: {
    isAuthenticated(value) {

      if (value) {

        this.$router.push({ name: 'Home' });

      }

    },
  },
  methods: {

    submitLogin() {

      this.$store.dispatch('login', { email: this.email, password: this.password });

    },

  },
};