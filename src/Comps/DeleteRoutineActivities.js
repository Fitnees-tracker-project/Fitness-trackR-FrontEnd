import{ useState } from "react"; 
import { useParams, useNavigate } from "react-router"; 

const DeleteRoutineActivities = () => {
    const {activityid} = useParams();
    console.log (activityid)
    const navigate = useNavigate();
async function DeleteRoutineActivity(event){ 
    event.preventDefault(); 

    const deleteFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activityid}`, {
        method: "DELETE", 
        header: {
            'Content-Type' : 'application/json', 
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }, 

    })
    const trueData = await deleteFetch.json()
    console.log('please send data', trueData)
    async function showAllRoutines () {
        const pubRoutines = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
        const regRout = await pubRoutines.json();
        // console.log('this si regROut', regRout)
        setRoutines(regRout)
    }
    showAllRoutines()
    navigate ("/routines")
}
return (
    <div>
        <button onClick={DeleteRoutineActivity}>DELETE POST</button>
    </div>
)
}

export default DeleteRoutineActivities;