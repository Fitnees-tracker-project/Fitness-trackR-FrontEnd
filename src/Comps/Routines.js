import React, {useState, useEffect} from 'react';
import { useOutletContext, Link, useParams } from 'react-router-dom';

const Routines = () => {
    const [post, setPost] = useState();
    useEffect(() => {
        async function showAllRoutines(){
            const pubRoutines = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
            const regRout = await pubRoutines.json();
            // console.log('this si regROut', regRout)
            setPost(regRout)
    }
    showAllRoutines()
}, [])
    // console.log('this is reg', post)

  return(
    post ? post.map((indivRoutine, idx) => {
        // console.log('this is post', post)
        return(
            <div className='divRoutine' key={idx}>
                <div className='routineName'>
                    <p>Routine: {indivRoutine.name}</p>
                </div>

                <div>
                    <p>Goal: {indivRoutine.goal}</p>
                </div>
                <button className='workoutButton'>
                    <Link className='linkInButton link' to={`/routine/activities/${idx}`}>See accociated activities</Link>
                </button>

                <button className='workoutButton right'>
                    <Link className='linkInButton link' to={`/routine/${indivRoutine.creatorName}`}>See more Routines by this user?</Link>
                </button>
            </div>
        )
    }):<p>No public routines</p>
  )
}
export default Routines;