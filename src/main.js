import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = '3bbd39cf30ae65e94f6625d5d86edb96727d6f25ac49c4f977df3ddd';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);
    // so many more properties
  });