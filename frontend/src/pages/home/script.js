
import HeaderNav from '../../components/headerNav/index.vue'

export default {
  name: 'Home',
  components: {
    HeaderNav
  },
  data() {
    return {
    };
  },
  async mounted() {
    // await this.fetchData();
  },
 
  methods: {
    logOut() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
    },
  
  },
};