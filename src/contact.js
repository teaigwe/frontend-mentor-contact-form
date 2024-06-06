

let submitBtn = document.body.getElementsByTagName('button')[0];
let queryButtons = document.body.querySelectorAll('input[name="query"]');
let queryError = document.body.querySelector('.errtxt[data-for="query"]');
let successMsg = document.body.querySelector('.successmsg')

let requiredFields = [
  {
    input: document.body.querySelector('.firstname'),
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
  {
    input: document.body.querySelector('.msgbox'),
    error: document.body.querySelector('.errtxt[data-for="msgbox"]')
  },
  {
    input: document.querySelector('#consentcheck'),
    error: document.querySelector('.errtxt[data-for="checkbox"]')
  }
];
// checking if the format for the email is correct
function isEmailValid(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Applying the font for the things typed in
requiredFields.forEach(fields => {
  fields.input.classList.add('inputfont');
});

// submit button for submitting the form
submitBtn.addEventListener('click', () => {
  let isFormValid = true;
  let isQueryChecked = Array.from(queryButtons).some(radio => radio.checked);

  requiredFields.forEach(fields => {
    if (fields.input.type === "checkbox") {
      if (!fields.input.checked) {
        fields.error.style.display = "block";
        isFormValid = false;
      } else {
        fields.error.style.display = "none";
      }
    } else if (fields.input.type === "email") {
      if (!isEmailValid(fields.input.value) || fields.input.value.trim() === "") {
        fields.error.style.display = "block";
        isFormValid = false;
      } else {
        fields.error.style.display = "none";
      }
    } else {
      if (fields.input.value.trim() === "") {
        fields.input.classList.add('errbdr');
        fields.error.style.display = 'block';
        isFormValid = false;
      } else {
        fields.input.classList.remove('errbdr');
        fields.error.style.display = 'none';
      }
    }
  });

  if (!isQueryChecked) {
    queryError.style.display = 'block';
    isFormValid = false;
  } else {
    queryError.style.display = 'none';
  }

  if (isFormValid) {
    console.log('Good to go');
    successMsg.style.display="block";
  } else {
    console.log('nah man');
    successMsg.style.display = "none"
  }
});
