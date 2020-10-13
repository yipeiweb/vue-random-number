//Creamos una aplicación vue
const app = Vue.createApp(
    {
        data() 
        {
            this.isSureDeleteResult = `
                ¿Estás seguro de eliminar los resultados? 
                Está acción no se puede retroceder!`;

                this.localStorageKey = 'result';

            return  {
                title: 'Número aleatorio',
                resultTitle: 'Resultados',
                localStorageKey: this.localStorageKey,
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                results: this.getResult()
            };  
        },
        
        methods:
        {
            getResult()
            {
                return localStorage.getItem(this.localStorageKey) 
                    ? JSON.parse(localStorage.getItem(this.localStorageKey))
                    : null;
            },

            deleteResult()
            {
                if (confirm(this.isSureDeleteResult)) {
                    localStorage.removeItem(this.localStorageKey);
                    location.reload();
                }

            }
        }
    }
);