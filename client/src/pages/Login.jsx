import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>login</h1>
            <form>
    <input type="text" placeholder='username' />
    <input type="text" placeholder='password' />
    <button>Login</button>
    <p>This is an Error !</p>
    <span> you don't have an account <Link to="/register">Register</Link></span>
     </form>
        </div>
  )
}

export default Login