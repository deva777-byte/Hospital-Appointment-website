import './login.css'

const Login = ()=>{
    return(
        <div className="login-page">
            <div className="login-box">
                <h1 className="title1">A M R U T A M</h1>
            <div className='label-container'>
                <label htmlFor='username' className='label-text'>Username</label>
                <input id = "username" type = "text" placeholder='enter username' className='inputel' />
            </div>
            <div className='label-container'>
                <label htmlFor='pass' className='label-text'>Password</label>
                <input id = "pass" type = "password" placeholder='enter password' className='inputel' />
            </div>
            <button className='button'>Login</button>
            </div>
        </div>
    )
}

export default Login;