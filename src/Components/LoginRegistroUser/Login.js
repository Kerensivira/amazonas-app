import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import { useForm } from '../hooks/useForm'
//import { useDispatch } from 'react-redux'
import { loginWithEmailPassAsync } from '../Redux/Actions/actionLogin';
import { makeStyles } from '@mui/material';

const Login = () => {

const dispatch = useDispatch()
  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: ''})

    const { email, password } = values
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(loginWithEmailPassAsync(email, password))
      console.log(values)
      reset()
      navigate('/')
}
  

const classes = useStyles()

  return (
    <div className={classes.login}>
<Link to='/'>
        <img 
        className={classes.login__logo}
        src='https://topeuniversity.com/wp-content/uploads/2021/12/amazon-gran.png'
        alt='Logo'
        />
        </Link>

<div className={classes.login__container}>
    <h1>
        Inicio de Sesión.
    </h1>
    
    <form onSubmit={handleSubmit} className={classes.login__form}>

<h5>
    Email
</h5>
<input
 type='email'
 name='email' 
 placeholder='ingresa tu correo electrónico.'
 value={email}
 onChange={handleInputChange}/>


<h5>
    Contraseña
</h5>
<input
 type='password'
 name='password' 
 placeholder='ingresa tu contraseña.'
 value={password}
 onChange={handleInputChange}/>

 <button type='submit' className='classes.login__loginBoton'>
Login
 </button>

 <button type='button' className='classes.login__loginBotonGoogle'>
Ingresar con google
 </button>

 <button type='button' className='classes.login__loginBotonFacebook'>
     Ingresar con Facebook
 </button>
    </form>
    
    <p> Amazonas app </p>
    <Link to='/registro'>¿Aún no tienes cuenta? Ingresa aquí</Link>
</div>

    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    
    login: {
        backgroundColor: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },


    login__logo: {
        marginTop: '20px',
        marginBottom: '20px',
        objectFit: 'contain',
        width: '100px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    
    login__container: {
        width: '300px',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        border: '1px solid lightgray',
        padding: '20px',
        '& h1': {
            fontWeight: '500',
            marginBottom: '20px',
        },
},

login__form: {
    '& h5': {
        marginBottom: '5px'
    },
    '& input': {
        height: '30px',
        marginBottom: '10px',
        backgroundColor: 'white',
        width: '98%'
    }
},

login__loginBoton: {
    background: '#f0c14b',
    borderRadius: '2px',
    width: '100%',
    height: '30px',
    border: '1px solid',
    marginTop: '10px',
    borderColor: '#a88734 #9c7e31 #846a29',
    cursor: 'pointer',
    '&:hover': {
        opacity: '.9'
    }
},



}))

export default Login