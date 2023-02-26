import './index.css';

export const Btn = ({ handleSubmit, disabled })=>{
  return (
    <button type='submit' disabled={disabled} onClick={handleSubmit}>LOGIN</button>
  );
}