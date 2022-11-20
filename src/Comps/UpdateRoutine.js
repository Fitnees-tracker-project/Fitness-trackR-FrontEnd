import { useState } from "react";
import { useParams, useNavigate } from "react-router";

const UpdateRoutine = () => {
    //WORKS
    const [name, setName] = useState();
    const [goal, setGoal] = useState();
    const [isPublic, setIsPublic] = useState();
    const {routineid} = useParams();
    const navigate = useNavigate()
    async function isTrue(event){
        event.preventDefault();
        setIsPublic(true)
        console.log(isPublic)
    }

    async function isFalse(event){
        event.preventDefault();
        setIsPublic(false)
        console.log(isPublic)
    }
    async function updateRout(event){
        event.preventDefault();
  
        const updateFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineid}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic
            })
        })
        const realData = await updateFetch.json()
        console.log('this is real data', realData)
        async function showAllRoutines(){
            const pubRoutines = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
            const regRout = await pubRoutines.json();
            // console.log('this si regROut', regRout)
            setRoutines(regRout)
        }
        showAllRoutines()
        navigate('/me')
    }
    // updateRout();
    return(
        <div>
            <h3>Update Routine</h3>
            <p>If you are not Routine creator this will not work!</p>
            <form onSubmit={updateRout}>
                <label>name:</label>
                <input type='text' value={name} onChange={(event) => {
                    console.log(event.target.value)
                    setName(event.target.value)
                }}></input>
                <br></br>
                <label>goal:</label>
                <input type='text' value={goal} onChange={(event) => {
                    console.log(event.target.value)
                    setGoal(event.target.value)
                }}></input>
                <br></br>
                <label>Is This Public?</label>
                <button onClick={isTrue}>true</button><button onClick={isFalse}>false</button>
                <br></br>
            <input type='submit'></input>

            </form>
        </div>
    )
}

export default UpdateRoutine;