
export default {
  name: 'headerNav',

  data() {},
  
  methods: {
    logOut() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
    },

  },
};