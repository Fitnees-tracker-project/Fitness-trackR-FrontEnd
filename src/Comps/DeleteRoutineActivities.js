import{ useState } from "react"; 
import { useParams } from "react-router"; 

const DeleteRoutineActivities = () => {
    const [id, setId] = useState(); 
    const [routineId, setroutineId] = useState();
    const [count, setCount] = useState(); 
    const [duration, setDuration] = useState(); 
    const {activityId} = useParams();

async function DeleteRoutineActivity(event){ 
    event.prevent.Default(); 

    const updateFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${activityid}`, {
        method: "DELETE", 
        header: {
            'Content-Type' : 'application/json', 
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }, 
    body: JSON.stringify({
        count, 
        duration
    })
    })
    const trueData = await deleteFetch.json()
    console.log('please send data', trueData)
}