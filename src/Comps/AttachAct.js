import { useParams } from "react-router";
import {useState} from 'react'


const AttachAct = () => {
    const {routineid} = useParams()
    const [activityid, setActivityid] = useState()
    const [count, setCount] = useState()
    const [duration, setDuration] = useState()
    console.log(routineid)
    async function formSubmit(event){
        event.preventDefault();
        const attFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineid}/activities`, {
            method: 'POST',
            body: JSON.stringify({
                activityid,
                count,
                duration
            })
        })
        const betterAct = await attFetch.json()
        console.log(betterAct)
    }
    return(
      <div>
        <form onSubmit={formSubmit}>
            <label>Id to add:</label>
            <input type='number' value={activityid} onChange={(event) => {
                setActivityid(event.target.value)
            }}></input>
            <br></br>
            <label>count: </label>
            <input type='number' value={count} onChange={(event) => {
                setCount(event.target.value)
            }}></input>
            <br></br>
            <label>duration: </label>
            <input type='number' value={duration} onChange={(event) => {
                setDuration(event.target.value)
            }}></input>
            <br></br>
            <input type='submit'></input>
        </form>
      </div>
    )
}

export default AttachAct;