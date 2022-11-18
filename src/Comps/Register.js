import React, {useState} from 'react';

const RegisterForm = () => {
    // WORKING
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function formSubmit(event){
        event.preventDefault();
        try {
            const registerFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register',
            {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
            },
            )
            const regData = await registerFetch.json()
            console.log('this is regData', regData)
            localStorage.setItem('token',regData.token)
        } catch (error) {
            console.error(error.detail)
        }}
    return(
        <div>
            <h3>Welcome to the website</h3>
            <div>
                <form onSubmit={formSubmit}>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={(event) => {
                        console.log(event.target.value)
                        setUsername(event.target.value)
                    }}></input>
                    <br></br>
                    <label>Password</label>
                    <input type='text' value={password} onChange={(event) => {
                        console.log(event.target.value)
                        setPassword(event.target.value)
                    }}></input>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}


export default RegisterForm;