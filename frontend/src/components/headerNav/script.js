
export default {
  name: 'headerNav',

  data() {
    return {};
  },
  
  methods: {
    logOut() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
    },

  },
};