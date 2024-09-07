export let links

 export function loadFromLoacatStorag(){
   links = JSON.parse(localStorage.getItem('Links'))
 }
 loadFromLoacatStorag();