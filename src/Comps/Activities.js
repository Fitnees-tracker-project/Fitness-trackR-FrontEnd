import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; 

const myActivities = () => {
    const [myActivities, setMyActivities] = useState () 

useEffect (() => {
    async function getActivities(){
        const activityFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/`, {
            header: {
                'Content-Type' : 'application/json'
            }
        })
        //console.log(activityFetch)
        const pleaseFetch = await activityFetch.json(); 
        console.log(pleaseFetch)
        setMyActivities(pleaseFetch)
    }
    getActivities()
}, [])
return(
    myActivities ? myActivities.map((indivActivity, idx) => {
        console.log('activity', indivActivity)
        return (
            <div className="divActivty" key={idx}>
                <div>
                    <p>ActivityId:{indivActivity.id}</p>
                </div>

                <div className="AcitivtyName">
                    <p>Name: {indivActivity.name}</p>
                </div>

                <div className="ActivityDescription">
                    <p>Description: {indivActivity.description}</p>
                </div>

                <div>
                    <button className="activitybutton">
                        <Link className="LinkActivityButton" to={`/updateActivity/${indivActivity.id}`}>Update Activity</Link>
                    </button>
                    <button className='RoutineButton'>
                            <Link className='linkInButton link' to={`/PublicRoutinesWithActivity/${idx}`}>See associated routines</Link>
                        </button>
                </div>
            </div>
            )
        }):<p>No data to show</p>
    )
}

export default myActivities