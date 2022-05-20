import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { registerAsync } from '../Redux/Actions/actionRegister'



const Registro = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [values, handleInputChange, reset] = useForm({
    name: '', 
    email: '',
    password: ''})

    const { name, email, password } = values
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(registerAsync(email, password, name))
      console.log(values)
      reset()
      navigate('/')
}
  
  return (
    <div className={classes.registro}>
<Link to='/'>
        <img 
        className={classes.registro__logo}
        src='https://topeuniversity.com/wp-content/uploads/2021/12/amazon-gran.png'
        alt='Logo'
        />
        </Link>

<div className={classes.registro__container}>
    <h1>
        Registro.
    </h1>
    
    <form onSubmit={handleSubmit} className={classes.registro__form}>

  <h5>
    Nombre de usuario
</h5>

<input
 type='name'
 name='name' 
 placeholder='Ingresa tu nombre de usuario.'
 value={name}
 onChange={handleInputChange}/>


<h5>
    Email
</h5>
<input
 type='email'
 name='email' 
 placeholder='Ingresa tu correo electrónico.'
 value={email}
 onChange={handleInputChange}/>


<h5>
    Contraseña
</h5>
<input
 type='password'
 name='password' 
 placeholder='Ingresa tu contraseña.'
 value={password}
 onChange={handleInputChange}/>

 <button type='submit' className='classes.registro__registroBoton'>
Registrarme
 </button>

 
    </form>
    
    <p> Amazonas app </p>
    <Link to='/login'>¿Ya tienes una cuenta? Ingresa aquí</Link>
</div>

    </div>
  )
}



const useStyles = makeStyles((theme) =>({
    
  registro: {
      backgroundColor: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },


  registro__logo: {
      marginTop: '20px',
      marginBottom: '20px',
      objectFit: 'contain',
      width: '100px',
      marginRight: 'auto',
      marginLeft: 'auto'
  },

  
  registro__container: {
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

registro__form: {
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

registro__registroBoton: {
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


export default Registro