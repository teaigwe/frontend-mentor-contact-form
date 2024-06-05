/* let firstName = document.body.getElementsByClassName('firstname').value4;
let lastName = document.body.getElementsByClassName('.lastname'); */

 let submitBtn = document.body.getElementsByTagName('button')[0];

let requiredFields = [
{
    input:document.body.querySelector('.firstname'),
error: document.body.querySelector('.errtxt[data-for="firstname"]')
},
 {
    input: document.body.querySelector('.lastname'), 
 error: document.body.querySelector('.errtxt[data-for="lastname"]')
},
 {
    input: document.body.querySelector('.email'), 
 error: document.body.querySelector('.errtxt[data-for="email"]')
},
/*  {
    input: document.body.querySelector('.query'), 
 error: document.body.querySelector('.errtxt[data-for="query"]')
}, */
 {
    input: document.body.querySelector('.msgbox'),
 error:document.body.querySelector('.errtxt[data-for="msgbox"]')
},
]


requiredFields.forEach(fields => {
    fields.input.classList.add('inputfont')
})

submitBtn.addEventListener('click', ()=>{

 requiredFields.forEach(fields =>{
if (fields.input.value.trim()  ===""){
fields.input.classList.add('errbdr');
fields.error.style.display = 'block'
} else {
fields.input.classList.remove('errbdr');
fields.error.style.display = 'none'
}
 })

})

