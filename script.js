const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

function handleChange() {
  const [username, password] = inputs;
  if (username.value && password.value.length >= 8) {
    location.assign("https://www.ea.com/pt-br/games/apex-legends");
  } else {
    alert("Usuário e senha devem conter 8 dígitos.");
  }
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));