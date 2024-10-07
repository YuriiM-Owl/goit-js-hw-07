const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const user = {};
  user.email = email;
  user.password = password;

  console.log(user);

  form.reset();
});
