/* let firstName = document.body.getElementsByClassName('firstname').value4;
let lastName = document.body.getElementsByClassName('.lastname'); */

let submitBtn = document.body.getElementsByTagName('button')[0];


const requiredFields = [
    firstName = document.body.querySelector('.firstname'),
    lastName = document.body.querySelector('.lastname'),
    email = document.body.querySelector('.email'),
    msgbox = document.body.querySelector('.msgbox'),
]

requiredFields.forEach(fields => {
    fields.classList.add('h4')
})
submitBtn.addEventListener('click', ()=>{

 requiredFields.forEach(fields =>{
if (fields.value.trim()  ===""){
fields.classList.add('redinput')
} else {fields.classList.remove('redinput')}
 })
})

