//Montamos la aplicación vue
const mountedApp = app.mount('#app');
//Setear el titulo
document.querySelector('title').innerHTML = mountedApp.title;