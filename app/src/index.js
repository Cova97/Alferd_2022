import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import FormLogin from './Login';
import FormSingIn from './SingIn';
import NavB from './Nav';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  const [inicio, cambiarInicio] = useState(false);
  const[registro, cambiarRegistro] = useState(false);

  return(
    <>
      {inicio === true ? (
        <>
          <h1>Hola Bienvenido</h1>
          <NavB/>
          <button onClick={() => cambiarInicio(false)}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <button onClick={() => cambiarRegistro(false)}>Iniciar Sesión</button>
          <button onClick={() => cambiarRegistro(true)}>Crear Usuario</button>
          {registro === false ? (
            <>
              <h1>Iniciar Sesión</h1>
              <FormLogin cambiarInicio={cambiarInicio}/>
            </>
          ) : (
            <>
              <h1>Crear Usuario</h1>
              <FormSingIn  cambiarRegistro={cambiarRegistro}/>
            </>
          )}
        </>
      )}
    </>
  );
};

root.render(<Jsx/>);

