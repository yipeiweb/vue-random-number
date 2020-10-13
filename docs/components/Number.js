app.component('number', {
    props: ['number', 'localStorageKey'],

    template: 
    /* html */
    `
        <a href="#" 
            :class="setBackground"
            @click="checkNumber(number)">
            {{ number }}
        </a>           
    `,

    data()
    {
        this.baseClass = 
            'list-group-item list-group-item-action m-2 rounded font-weight-bold';
        this.alertMessage = "Has acertado!";
        this.baseResult = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0};
        return {
            isChecked: false
        };
    },

    methods: 
    {
        saveResult(number)
        {
            let result = localStorage.getItem(this.localStorageKey);
            if (!result) {
                localStorage.setItem(
                    this.localStorageKey, 
                    JSON.stringify(this.baseResult) 
                );
            } 

            let storedResult = !result 
                ? JSON.parse(localStorage.getItem(this.localStorageKey))
                : JSON.parse(result);

            for (let item in storedResult) {
                if (storedResult.hasOwnProperty(number)) {
                    storedResult[number] = parseInt(storedResult[number]) + 1;
                    localStorage.setItem(
                        this.localStorageKey,
                        JSON.stringify(storedResult)
                    );
                    
                    break;
                }
            }
            
        },

        generateRandomNumber() 
        {
            return Math.floor(Math.random() * 10) + 1;
        },

        checkNumber(number)
        {
            this.isChecked = false;
            if (number == this.generateRandomNumber()) {
                this.isChecked = true;
                this.saveResult(number);
                this.$root.results;
                if (confirm(this.alertMessage)) {
                    setTimeout(() => {
                        location.reload();
                    }, 1500);
                }
            }   
        }
    },

    computed: 
    {
        setBackground()
        {
            return  this.isChecked 
                ? this.baseClass + ' bg-warning'
                : this.baseClass + ' bg-light';
        }
    }
})