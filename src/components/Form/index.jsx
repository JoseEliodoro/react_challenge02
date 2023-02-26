import './index.css';
import { Input } from '../Input';
import { Btn } from '../Btn';
import { EyeVision } from '../Utils';
import { MdEmail } from "react-icons/md";
import { useContext } from 'react';
import { formContext } from '../../App';

export const Form = ({ handleSubmit, disabled })=>{
  const context = useContext(formContext);
  const {email, setEmail, password, setPassword, typePassword, setTypePassword} = context;
  return (
    <form action='submit'>
      <h1>FAÇA LOGIN</h1>
      <div>
        <Input
          type={'email'}
          handleChange={setEmail}
          value={email}
          icon={<MdEmail/>}
        />
        <Input
          type={typePassword}
          handleChange={setPassword}
          value={password}
          icon={<EyeVision typePassword={typePassword} handleVisible={
            ()=>{setTypePassword((t)=> t==='password'? 'text': 'password')}
          }/>}
        />
      </div>
      <Btn handleSubmit={handleSubmit} disabled={disabled}/>
    </form>
  );

};