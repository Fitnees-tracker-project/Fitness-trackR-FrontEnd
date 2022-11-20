import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


const MyPage = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        async function getUser() {
            const myRoutineFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const realData = await myRoutineFetch.json();
            console.log('this is real data', realData.username)
            setUser(realData.username)
        }
        getUser()
    }, [])

    const [myRoutines, setMyRoutines] = useState()
    useEffect(() => {
    async function getRoutines(){
        const routineFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user}/routines`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log(routineFetch)
        const betterFetch = await routineFetch.json();
        // console.log(betterFetch)
        setMyRoutines(betterFetch)
    }

    if(user){
    getRoutines()
    }

    }, [user])

    return(
        myRoutines ? myRoutines.map((indivRoutine, idx) => {
            // console.log(indivRoutine)
            return(
                <div className="divRoutine" key={idx}>
                    <div>
                        <p>PostId: {indivRoutine.id}</p>
                    </div>

                    <div className="routineName">
                        <p>Name: {indivRoutine.name}</p>
                    </div>

                    <div>
                        <p>Goal: {indivRoutine.goal}</p>
                    </div>

                    <div>
                        <button className="workoutButton">
                            <Link className="linkInButton" to={`/routines/${indivRoutine.id}`}>Update Post</Link>
                        </button>
                        <button className="workoutButton linkInButton"> 
                            <Link className="linkInButton" to={`/me/routines/${indivRoutine.id}`}>Delete Post</Link>
                        </button>
                    </div>
                </div>
            )
        }):<p>Failed to load data</p>
    )
}

export default MyPage;