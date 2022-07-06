import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function json(url) {
    return fetch(url).then(res => res.json());
  }
  document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('player').play();
    document.getElementById('popup').style.display = "none";
    document.removeEventListener('click', musicPlay);
}

  let apiKey = '3bbd39cf30ae65e94f6625d5d86edb96727d6f25ac49c4f977df3ddd';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    let ip = (data.ip);
    let city = (data.city);
    let region = (data.region);
    let dude = (data.latitude);
    let brt = (data.longitude);
    let crt = (data.country_name);
    let cnt = (data.continent_name);
    document.getElementById("text").textContent = "      Target Info:"+ "\n" + "\n" +"      " +ip + "\n" + "     " + crt + ", " + cnt + "\n" + city + ", " + region + "\n" + " " + dude + ", " + brt;
    document.getElementById("second").textContent = city;

  });


  