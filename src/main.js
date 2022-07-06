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
const url = "https://thugger.vercel.app/info";
async function getdata() {
  const response = await fetch (url);
  const data = await response.json();
  let ip = (data.ip);
  let city = (data.city);
  let region = (data.region);
  let dude = (data.latitude);
  let brt = (data.longitude);
  let crt = (data.country_name);
  let cnt = (data.continent_name);
  let proxy = (data.is_proxy);
  let tor = (data.is_tor);
  let datacenter = (data.is_datacenter);

  if(proxy == "true" || datacenter == "true" ){
    document.getElementById("text").textContent = "turn your vpn off.";
  }
  else if (tor == "true") {
    document.getElementById("text").textContent = "why are you in a tor browser, pussy?"
  }
  else{
    document.getElementById("text").textContent = "Target Info:"+ "\n" + "\n" +"" +ip + "\n" + "" + crt + ", " + cnt + "\n" + city + ", " + region + "\n" + "" + dude + ", " + brt;
  }

}
getdata();


