const app = Vue.createApp({
    data() {
        return {
            name: 'Brianne Camesi',
            age: 30,
            imageURL: "http://1.bp.blogspot.com/-zxhc-2_BO6U/T-Bc0zMJ7iI/AAAAAAAADGg/vvoYHLKDPDA/s1600/889.jpg"
        };
    },
    methods: {
        favoriteNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');