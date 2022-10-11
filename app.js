const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedUserInput: ''
        }
    },
    methods: {
        showAlert() {
            alert('Button is pressed')
        },
        setFirstUserInput(event) {
            this.userInput = event.target.value;
        },
        confirmInput (event) {
            this.confirmedUserInput = event.target.value;
        }
    }
});

app.mount('#assignment')