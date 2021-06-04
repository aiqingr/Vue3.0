const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue3.0',
            vueLink: 'https://vuejs.org/',
            courseGoalA: 'This is Goal A',
            courseGoalB: 'This is Goal B',
            courseGoalC: '<strong>This is only a testing</strong>'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'Learn Vue2.0';
            } else {
                return 'Learn Vue3.0';
            }
        },
        outputGoalTwo() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});
app.mount("#user-goal");