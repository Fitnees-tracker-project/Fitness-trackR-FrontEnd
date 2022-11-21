import{ useState } from "react"; 
import { useParams } from "react-router"; 

const UpdateRoutineActivity = () => {
    const [id, setId] = useState(); 
    const [routineId, setroutineId] = useState();
    const [count, setCount] = useState(); 
    const [duration, setDuration] = useState(); 
    const {activityId} = useParams();

async function UpdateRoutineActivities(event){ 
    event.preventDefault(); 

    const updateFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${activityid}`, {
        method: "PATCH", 
        header: {
            'Content-Type' : 'application/json', 
        }, 
    body: JSON.stringify({
        count, 
        duration
    })
    })
    const trueData = await updateFetch.json()
    console.log('please send data', trueData)
}
return(
    <div>
        <h3>Update Routine Activity</h3>
        <p>Update your count and duration!</p>
        <form onSubmit={UpdateRoutineActivities}>
            <label>Id:</label>
            <input type='text' value={id} onChange={(event) => {
                console.log(event.target.value)
                setId (event.target.value)
            }}></input>
            <br></br>
            <label>RoutineId:</label>
            <input type='text' value={routineId} onChange={(event) => {
                console.log(event.target.value)
                setroutineId (event.target.value)
            }}></input>
            <br></br>
            <label>ActivityId:</label>
            <input type='text' value={activityId} onChange={(event) => {
                console.log(event.target.value)
                setactivityId (event.target.value)
            }}></input>
            <br></br>
            <label>Count:</label>
            <input type='text' value={count} onChange={(event) => {
                console.log(event.target.value)
                setCount(event.target.value)
            }}></input>
            <br></br>
            <label>Duration:</label>
            <input type='text' value={duration} onChange={(event) => {
                console.log(event.target.value)
                setDuration (event.target.value)
            }}></input>
            <input className="linkInButton link" type='submit'></input>

        </form>
    </div>
)
}

export default UpdateRoutineActivity;