import { MdVisibilityOff, MdVisibility } from "react-icons/md";

export const EyeVision=({ typePassword, handleVisible })=>{

  return (

    <>
      {typePassword !== 'password' ? <MdVisibility onClick={handleVisible}/>: <MdVisibilityOff  onClick={handleVisible}/>}
    </>

  );
};