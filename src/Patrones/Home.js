import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const navegar = () =>{
        navigate("/Singleton");
      }
      
    return (
        <div>
            <div onClick={ () => {navegar()} } >{'hola listo?'}</div>
        </div>
    )
}

export default Home;
