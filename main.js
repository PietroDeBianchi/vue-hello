const { createApp } = Vue

createApp({
  data() {
    return {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
      color: '.mainStyle',
      message: 'We know JS sucks, but with us it becomes wonderful',
      joke: 'Ok not true however it sucks less!'
    }
  }
}).mount('#app');

