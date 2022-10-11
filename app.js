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
        setUserInput(event) {
            this.userInput = event.target.value;
        },
        setConfirmedInput (event) {
            this.confirmedUserInput = event.target.value;
        }
    }
});

app.mount('#assignment')