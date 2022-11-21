import {useContext, useState} from 'react';

const Login = () => {
    // WORKING
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    async function formSubmit(event){
    event.preventDefault();
    try {
        const logFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
        })
        const logData = await logFetch.json();
        console.log('this is logData', logData)
        localStorage.setItem('token', logData.token)
    } catch (error) {
        console.error(error.deatil)
    }}
    return(
        <div className='divRoutine'>
            <h3>Login</h3>
            <div>
                <form onSubmit={formSubmit}>
                <label>Username:</label>
                <input type='text' value={username} onChange={(event) => {
                    console.log(event.target.value)
                    setUsername(event.target.value)
                }}></input>
                <br></br>
                <label>Password:</label>
                <input type='text' value={password} onChange={(event) => {
                    console.log(event.target.value)
                    setPassword(event.target.value)
                }}></input>
                <br></br>
                <input  className="linkInButton link "type='submit'></input>
                </form>
            </div>
        </div>
    )
}

export default Login;