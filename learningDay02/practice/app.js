const app = Vue.createApp({
    data() {
        return {
            output: '',
            confirmedOutput: ''
        };
    },
    methods: {
        buttonPressed() {
            alert('Button is pressed!');
        },
        outputKeydown(event) {
            this.output = event.target.value;
        },
        confirmOutput(event){
            this.confirmedOutput = event.target.value;
        }
    }
});

app.mount("#assignment")