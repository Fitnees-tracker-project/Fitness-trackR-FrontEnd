import { useEffect, useState } from "react";
import { useParams } from "react-router";

const LoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState();
    const [user, setUser] = useState();
    useEffect(() => {
        async function amILoggedIn() {
            const myRoutineFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const realData = await myRoutineFetch.json();
            // console.log('this is real data', realData)
            setLoggedIn(realData)
        }
        amILoggedIn()
    }, [])
        
            return(
                <div>
                    <h1 className="main center">Welcome to your profile</h1>
                    <p className="center">If you have any Routines they will show up here </p>
                </div>
            )

}
export default LoggedIn;