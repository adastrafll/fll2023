const clearUser = () => {
  localStorage.removeItem('user');
}

const onSubmit = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  login(email, password);
}

const login = (email, password) => {
  switch(email) {
    case 'anishhaha3@gmail.com': 
      localStorage.setItem('user', JSON.stringify({ email, name: 'Anish Mahajan' }));
      window.location.href = '/anish/home.html';
      break;
    default:
      alert('Invalid email or password');
  }
  return false;
}