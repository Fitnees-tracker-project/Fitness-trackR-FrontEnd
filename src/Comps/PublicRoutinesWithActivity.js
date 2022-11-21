import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';


const PubicRoutinesWithActivity = () => {
    const [PubicRoutinesWithActivity, setPublicRoutinesWithActivity] = useState ();

    useEffect (() => {
        async function getRoutineActivities () {
            const  RoutineActivityFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities/3/routines', {
                header:{
                    'Content-Type' : 'application/json'
                }
            })
            const pleaseFetch = await RoutineActivityFetch.json();
            console.log(pleaseFetch)
            setPublicRoutinesWithActivity(pleaseFetch)
        }
        getRoutineActivities()
    }, [])
    return(
        PubicRoutinesWithActivity ? PubicRoutinesWithActivity.map((indivActivityRoutine, idx) => {
            console.log('routineActivity', indivActivityRoutine.activities[0].name)
            return (
                <div className='divRoutine' key={idx}>
                    <div>
                        <p>ActivityId: {indivActivityRoutine.id}</p>
                    </div>
                    <div>
                        <p>Name: {indivActivityRoutine.activities[0].name}</p>
                    </div>
                    <div>
                        <p>Description: {indivActivityRoutine.activities[0].description}</p>
                    </div>
                    <div>
                        <p>Duration: {indivActivityRoutine.activities[0].duration}</p>
                    </div>
                    <div>
                        <p>Count: {indivActivityRoutine.activities[0].count}</p>
                    </div>
                    <div>
                        <p>Routine ActivityId: {indivActivityRoutine.activities[0].routineActivityId}</p>
                    </div>
                    <div>
                        <p>RoutineId: {indivActivityRoutine.activities[0].routineId}</p>
                    </div>
                    <div>
                        <button className='linkInButton link'>
                            <Link className="LinkRaidButton" to={`/updateRoutineActivity/${idx}`}>Update</Link>
                        </button>
                    </div>
                    <div>
                        <button className='linkInButton link'>
                            <Link className="DeleteButton" to={`/deleteRoutineActivity/${idx}`}>DELETE</Link>
                        </button>
                    </div>
                </div>
            )
        }):<p>No data to show</p>
    )
}

export default PubicRoutinesWithActivity;