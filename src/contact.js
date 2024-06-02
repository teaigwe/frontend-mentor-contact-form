let firstName = document.body.getElementsByClassName('.firstname');
let lastName = document.body.getElementsByClassName('.lastname');

let submitBtn = document.body.getElementsByTagName('button')[0];

submitBtn.addEventListener('click',()=>{
    if (firstName.addEventListener === ""){
        firstName.className = 'redinput'
    }
})
