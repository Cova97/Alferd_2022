import React, { useState } from "react";

const FormSingIn = (props) =>{
    const[newUser, setNewUser] = useState("");
    const[newPasswprd, setNewPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "newUser"){
            setNewUser(e.target.value);
        }
        else if(e.target.name === "newPassword"){
            setNewPassword(e.target.value);
        }
        else if(e.target.name === "confirmPassword"){
            setConfirmPassword(e.target.value);
        }
    }

    const onSubmit = (e) =>{
        console.log(e);
        if(newPasswprd === confirmPassword){
            alert("Usuario creado correctamente");
            props.cambiarRegistro(true);
        }
        else{
            alert("Las contraseñas no coinciden");
        }
    }

    return(
        <>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="newUser">Crear Usuario</label>
                    <input 
                    type="text" 
                    name="newUser" 
                    id="newUser" 
                    value={newUser} 
                    onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="newPassword">Crear Contraseña</label>
                    <input 
                    type="password" 
                    name="newPassword" 
                    id="newPassword" 
                    value={newPasswprd} 
                    onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Conformar Contraseña</label>
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    value={confirmPassword} 
                    onChange={onChange}></input>
                </div>
                <button>Confirmar</button>
            </form>
        </>
    );
};

export default FormSingIn;