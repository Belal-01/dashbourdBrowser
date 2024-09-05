// start the timer js 
import { links } from "./links.js"


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
   links = newArray
   console.log(links)
  })
})


{/*  */}
