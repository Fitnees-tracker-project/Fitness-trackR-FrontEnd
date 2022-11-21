import { useParams } from "react-router"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const MyRoutines = () => {
    const {username} = useParams()
    console.log(username)
    const [myRoutines, setMyRoutines] = useState()
    useEffect(() => {
    async function getRoutines(){
        const routineFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log(routineFetch)
        const betterFetch = await routineFetch.json();
        console.log(betterFetch)
        setMyRoutines(betterFetch)
    }
    getRoutines()
    }, [])
    return(
        myRoutines ? myRoutines.map((indivRoutine, idx) => {
            // console.log('rout', indivRoutine)
            return(
                <div className="divRoutine" key={idx}>
                    <div>
                        <p>PostId:{indivRoutine.id}</p>
                    </div>

                    <div className="routineName">
                        <p>Name: {indivRoutine.name}</p>
                     </div>

                     <div>
                        <p>Goal: {indivRoutine.goal}</p>
                     </div>

                     <div>
                        {/* <p>If there are activities they will be here: {indivRoutine.activities}</p> */}
                     </div>

                     <div>
                        <button className='workoutButton'>
                            <Link className='linkInButton link' to={`/routine/activities/${idx}`}>See associated activities</Link>
                        </button>
                     </div>
                </div>
            )
        }):<p>No data to show</p>
    )
}

export default MyRoutines;