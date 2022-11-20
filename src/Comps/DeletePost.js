import { useOutletContext, useParams, useNavigate } from "react-router"


const DeletePost = () => {
    const {postId} = useParams()
    console.log(postId)
    const {setRoutines} = useOutletContext();
    const navigate = useNavigate()
    async function deletePost(){
        const deleteFetch = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const delData = await deleteFetch.json();
        console.log(delData)
            async function showAllRoutines(){
                const pubRoutines = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
                const regRout = await pubRoutines.json();
                // console.log('this si regROut', regRout)
                setRoutines(regRout)
            }
            showAllRoutines()
            navigate('/me')
        
    }
    return(
        <div>
           <button onClick={deletePost}>Are you sure you want to delete this post?</button>
        </div>
    )
}


export default DeletePost