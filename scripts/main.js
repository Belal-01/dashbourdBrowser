// start the timer js 
import { links, loadFromLoacatStorag } from "./links.js"



setInterval(()=>{
  const today = dayjs()
  const hour = today.format('H')
  const minutes = today.format('m')
  const seconds  = today.format('s')

const timer = document.querySelector('.js-timer')
timer.innerHTML = `${hour} : ${minutes} : ${seconds}`
},1000)

const today = dayjs()
const day = today.format('D')
const month = today.format('MMM')
const year = today.format('YYYY')

const date = document.getElementById('date').innerHTML = `${day} ${month} ${year}`

// start the links js

function renderLinksSection(){
  let totalHtml = ''

  links.forEach((link)=>{
  const Html = `<div class="dashboard-menu-item--links--link">
  <a href="${link.link}"  target="_blank" class="link--link">
  <div class="link-icon">
    <img src="./images/${link.icon}.png" alt="link imag">
  </div>
  <div class="link-name">
    ${link.name}
  </div>
  </a>
  
  <div class="link-delete-btn js-delete-btn" data-link-id =${link.link}>
    <button>-</button>
  </div>
  </div>`
    totalHtml+= Html;
  })
  
  document.getElementById('links-box').innerHTML= totalHtml;
  
  /// add js for delete buttons  
  const deleteButtons = document.querySelectorAll('.js-delete-btn')
  deleteButtons.forEach((deleteButton)=>{
    deleteButton.addEventListener('click',()=>{
     const linkId = deleteButton.dataset.linkId
     const newArray = []
     links.forEach((linkelemnt)=>{
      if(linkelemnt.link!==linkId){
        newArray.push(linkelemnt)
      }
     })
    localStorage.setItem('Links',JSON.stringify(newArray))
    loadFromLoacatStorag();
    renderLinksSection();
    })
  })
}


renderLinksSection()
const addLinkForm = document.getElementById('add-new-link-form')
document.getElementById('add-form-link-btn').addEventListener('click',()=>{
  if(addLinkForm.classList.contains('hide-add-new-link-form'))
        addLinkForm.classList.remove('hide-add-new-link-form')
  else
  addLinkForm.classList.add('hide-add-new-link-form');
})

addLinkForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const name = document.getElementById('link-name').value;
  const icon = document.getElementById('link-icon').value;
  const link = document.getElementById('link-link').value;
 const newLink = {
  name:name,
  icon:icon,
  link:link
 }
 links.push(newLink)
 localStorage.setItem('Links',JSON.stringify(links))
 renderLinksSection();
 document.getElementById('link-name').value = '';
 document.getElementById('link-icon').value = ''
 document.getElementById('link-link').value = '';


addLinkForm.classList.add('hide-add-new-link-form');

  
})


// add js to weather column 

function getLocation(){
  navigator.geolocation.getCurrentPosition((position)=>{
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=655247343fb24b1992b73350243108&q=${lat},${long}&days=5&aqi=no&alerts=no`
  fetchWeatherData(url)
  })
}
getLocation()
const weathercards = document.getElementById('weather-cards')
async function  fetchWeatherData(url){
 fetch(url).then(respone=>respone.text()).then(data =>{
  const Weather = JSON.parse(data);
  console.log(Weather.forecast.forecastday[0]);
  let totalHTml = ''
for(let i = 0 ;i<4;i++){
const Html = `  
<div class="dashboard-menu-item-weather-cards-card">      
          <div class="weather-icon">
            <img src="${Weather.forecast.forecastday[0].day.condition.icon}" alt="link imag">
          </div>
          <div class="weather-info">
            <div class="weather-day">
              Today
            </div>
            <div class="weather-describtion">
              <span class="weather-state">
                28.3 C
              </span>
              <span class="weather-dgree">
                Sunny
              </span>
            </div>
          </div>
        
        </div>`

totalHTml+=Html;
}
  
 })

}










const array = [{icon: 'google', name: 'google', link: 'htttp:dsfksfhhfowhf'},
  {icon: 'facebook', name: 'facebook', link: 'htttp:dsfkhhfowhf'},
  {icon: 'instagram', name: 'instagram', link: 'htttp:sfksfhhfowf'}]


