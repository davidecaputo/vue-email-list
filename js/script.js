const {createApp} = Vue;

createApp({
    data() {
      return {
        randomEmail: ''
      }
    },
    methods: {
      getData() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((r) => {
          console.log(r.data.response);
          this.randomEmail = r.data.response;
        });
      }
    },
    mounted() {
      this.getData();
    }
}).mount('#app')