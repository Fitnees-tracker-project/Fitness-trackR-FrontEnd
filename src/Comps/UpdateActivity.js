import { useState} from "react";
import { useParams } from "react-router"; 

const UpdateActivity = () => {
    const [name, setName] = useState(); 
    const [description, setDescription] = useState(); 
    const {activityid} = useParams();

async function updateActivities(event){
    event.preventDefault(); 

    const updateFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityid}`, {
        method: "PATCH", 
        header: {
            'Content-Type' : 'application/json', 
        }, 
    body: JSON.stringify({
        name, 
        description
        })
    })
    const trueDate = await updateFetch.json()
    console.log('please send data', trueDate)
    }
    return(
        <div>
            <h3>Update Activity</h3>
            <p>Yes, anyone can update it!</p>
            <form onSubmit={updateActivities}>
                <label>Name:</label>
                <input type='text' value={name} onChange={(event) => {
                    console.log(event.target.value)
                    setName(event.target.value)
                }}></input>
                <br></br>
                <label>Description:</label>
                <input type='text' value={description} onChange={(event) => {
                    console.log(event.target.value)
                    setDescription(event.target.value)
                }}></input>
            <input type='Submit'></input>
            </form>
        </div>
    )
}

export default UpdateActivity;