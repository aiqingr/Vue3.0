const app = Vue.createApp({
    data() {
        return {
            myName: 'Nick',
            myAge: 27,
            myLink: 'https://th.bing.com/th/id/R70f482983d0101d9b2f246cf901bea2e?rik=5klxKjd00ytWtQ&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f41L-LAEx5UL._SY445_QL70_.jpg&ehk=%2fBIptoPi9qY6DCnY%2f68TIjhHJHVGEUCmekXpyuOghls%3d&risl=&pid=ImgRaw'
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random()
        }
    }
})

app.mount("#assignment")