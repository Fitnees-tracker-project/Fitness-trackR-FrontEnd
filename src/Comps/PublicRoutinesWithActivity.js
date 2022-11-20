import { useEffect, useState } from 'react'; 

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
            console.log('routineActivity', indivActivityRoutine)
            return (
                <div className='routineActivity' key={idx}>
                    <div>
                        <p>ActivityId:{indivActivityRoutine.id}</p>
                    </div>
                    <div>
                        <p>Name:{indivActivityRoutine.name}</p>
                    </div>
                    <div>
                        <p>Description:{indivActivityRoutine.description}</p>
                    </div>
                    <div>
                        <p>Duration:{indivActivityRoutine.duration}</p>
                    </div>
                    <div>
                        <p>Count:{indivActivityRoutine.count}</p>
                    </div>
                    <div>
                        <p>Routine ActivityId:{indivActivityRoutine.routineActivityId}</p>
                    </div>
                    <div>
                        <p>RoutineId:{indivActivityRoutine.routineId}</p>
                    </div>
                </div>
            )
        }):<p>No data to show</p>
    )
}

export default PubicRoutinesWithActivity;