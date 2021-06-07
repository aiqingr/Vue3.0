const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    // we treated it a property as it is a method
    fullName() {
      console.log('Running again');
      if(this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'Nick';
      }  
    }
  },
  methods: {
    confirmedName() {
      // consolo.log to prove the following
      // non event bond methods will be re-excuted when any methods in Vue.
      // This is not good per performance perspective.
      console.log('Running again');
      if(this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'Nick';
      }  
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
