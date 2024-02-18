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
  email=email.toLowerCase();
  switch(email){
    case 'anishhaha3@gmail.com': 
      localStorage.setItem('user', JSON.stringify({ email, name: 'Anish Mahajan' }));
      window.location.href = './anish/home.html';
      break;
      case 'rishik.shukla86@masonohioschools.com': 
      localStorage.setItem('user', JSON.stringify({ email, name: 'Anish Mahajan' }));
      window.location.href = './rishik/profile.html';
      break;
      case 'prishaupadhyay6861@gmail.com': 
      localStorage.setItem('user', JSON.stringify({ email, name: 'Anish Mahajan' }));
      window.location.href = './prisha/home.html';
      break;
      case 'vibhav.vadakapurapu75@masonohioschools.com': 
      localStorage.setItem('user', JSON.stringify({ email, name: 'Anish Mahajan' }));
      window.location.href = '/anish/home.html';
      break;
      case 'akshajkulkarni2022@gmail.com': 
      localStorage.setItem('user', JSON.stringify({ email, name: 'Anish Mahajan' }));
      window.location.href = '/anish/home.html';
      break;
    default:
      alert('Invalid email or password');
  }
  return false;
}
const onLogin = () => {
  window.location.href = './login.html';
}
