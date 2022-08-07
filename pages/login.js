import { useState } from 'react';
import axios from 'axios';

const loginPage = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='email' type='email' placeholder='Email' onChange={handleChange} />
        <input name='password' type='password' placeholder='password' onChange={handleChange} />
        <button>Login</button>

      </form>
    </div>
  )
}

export default loginPage