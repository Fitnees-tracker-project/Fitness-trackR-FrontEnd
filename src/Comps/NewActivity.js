import { useState } from "react"; 

const createNewActivity = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()

async function createActivity(event) {
    event.preventDefault
    const newActivityFetch = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        method: "POST", 
        header: {
            'Content-Type': 'applicatiion/json', 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }, 
        body: JSON.stringify({
            name,
            description
        })
    })
    const trueData = await newActivityFetch.json(); 
    console.log('please send data', trueData)
}    
    return( 
        <div>
            <h3>Create New Activity!</h3>
            <form onSubmit={createActivity}>
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
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default createNewActivity;