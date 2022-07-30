import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
    

    

    const MySwal = withReactContent(Swal)

 
    const submitHandler = e => {
        e.preventDefault();


       


        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    

        console.log(email, password);
        if(email ==='' || password===''){
            Swal.fire({
                icon: 'info',
                title: 'Debes llenar todos los campos...',
                text: 'please!',
              })   
            return
        } 

        if(email !== '' && !regexEmail.test(email)){
            Swal.fire({
                icon: 'info',
                title: 'Debes llenar todos los campos...',
                text: 'please!',
              })  
            return
        }

        if(email !== 'sbogosavljevich@gmail.com' || password !== 'react'){
            Swal.fire({
                icon: 'error',
                title: 'Credenciales inválidas...',
                text: 'Something went wrong!',
              })    
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Credenciales válidas...',
                text: 'nothing went wrong!',
              }) 
        }
    }
   
  return (
    
        <form onSubmit={submitHandler}>
            
            <h2>Formulario de Login</h2>
            <label htmlFor="email">
                <span>Correo electronico:</span>
            <input type="email" name='email' id='email' />
            </label>
            <br />
            <label htmlFor="password">
                <span>Contraseña:</span>
            <input type="password" name="password" id="password" />
            </label>
            <br />
            <button type='submit'>Ingresar</button>
        </form>

   
  )
}

export default Login