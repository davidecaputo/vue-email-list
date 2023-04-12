const {createApp} = Vue;

createApp({
    data() {
      return {
        randomEmail: []
      }
    },
    methods: {
      getData() {
        this.randomEmail = [];
        for (let i = 1; i <= 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((r) => {
            console.log(r.data.response);
            this.randomEmail.push(r.data.response);
          });
        }
      }
    },
    mounted() {
      this.getData();
    }
}).mount('#app')