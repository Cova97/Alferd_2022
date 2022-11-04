import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import FormLogin from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Alferd Enchapados SA de CV';

const Jsx = () => {
  const [inicio, cambiarInicio] = useState(false);
  return(
    <>
      {inicio === true ? (
        <>
          <h1>Hola {name} </h1>
          <button onClick={() => cambiarInicio(false)}>Cerrar sesión</button>
          
        </>
      ) :(
        <>
          <h1>Iniciar sesión</h1>
          <FormLogin cambiarInicio={cambiarInicio}/>
        </>
      )}
    </>
  );
};

root.render(<Jsx/>);
