import React, {useState} from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function formSubmit(event){
        event.preventDeafult();
        try {
        } catch (error) {
            console.error(error.detail)
        }
    }
    return(
        <div>
            <p>COME BACK LATER</p>
        </div>
    )
}

export default RegisterForm;