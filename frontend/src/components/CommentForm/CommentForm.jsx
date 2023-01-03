import { useState, useEffect } from "react"
import axios from "axios"
import useAuth from "../../hooks/useAuth"

const CommentForm = (props) => {

        const [videoId, setVideoId] = useState('')
        const [text, setText] = useState('')
        const [likes, setLikes] = useState('0')
        const [dislikes, setDislikes] = useState('0')
        const [user, token] = useAuth()

        
        function handleSubmit(event){
            event.preventDefault();
            setVideoId(props.videoId)
            let newComment = {
                video_id: videoId,
                text: text,
                likes: likes,
                dislikes: dislikes,
                user_id: user.id
            }
            console.log(newComment)
            addNewComment(newComment)
    
        }

        async function addNewComment(newComment){
            await axios.post("http://127.0.0.1:8000/api/comments/", newComment)
            props.fetchComments()
          }
        
        return (
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>{user.username}</label>
                        </div>
                        <div>   
                            <label>Comment</label>
                            <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
                        </div>
                            <button type='submit'>Create</button>
                    </form>
                </div>
    
     );
}
 
export default CommentForm;