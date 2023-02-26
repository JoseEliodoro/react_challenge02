import { createContext, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { login } from './components/Utils/login';
export const formContext = createContext();


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typePassword, setTypePassword] = useState('password');

  const submit = (e)=>{
    e.preventDefault();
    login({password, email}).then(()=>{
      window.alert('Login realizado!')
    }).catch(err=>{
      console.log(err);
    })
  };

  return (
    <div className="App">

      <formContext.Provider value={{email, setEmail, password, setPassword, typePassword, setTypePassword}}>
        <div className='meio'>
          <Form handleSubmit={submit} disabled={email === '' || password.length <= 6}/>
        </div>
      </formContext.Provider>

    </div>
  );
}

export default App;
