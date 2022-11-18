import { useState } from "react";

const NewRoutine = () => {
    const [name, setName] = useState()
    const [goal, setGoal] = useState()
    const [isPublic, setIsPublic] = useState(false);
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
    async function createRoutine(event){
        // WORKING
        event.preventDefault();
    const newRoutineFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        method: "POST",
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
    const realData = await newRoutineFetch.json();
    console.log('this is real data', realData)
}
    return(
        <div>
            <h3>Create a new Routine!</h3>
            <form onSubmit={createRoutine}>
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

export default NewRoutine;