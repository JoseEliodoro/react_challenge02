import { useRef } from 'react';
import './index.css';

export const Input = ({ type, handleChange, value, icon })=>{
    const inputRef = useRef();

    return (
      <div className='input'>
        {icon}
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={()=> handleChange(inputRef.current.value)}
        />
      </div>
    );
};