const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
      confirmName: ''
    };
  },
  methods: {
    // vinilla javascript way when "v-on:submit"
    /*     submitForm(event) {
      event.preventDefault();
      alert('Submitted');
    }, */
    // Vue way when "v-on:submit.prevent"
    submitForm(){
      alert('Submitted');
    },
    confirmInput() {
      this.confirmName = this.yourName;
    },
    // function overloading is not supported by javascript
    // add() {
    //   this.counter++;
    // },
    // reduce() {
    //   this.counter--;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.yourName = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
