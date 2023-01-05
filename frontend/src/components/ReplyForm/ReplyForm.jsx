import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const ReplyForm = (props) => {

    const [text, setText] = useState("");
    const [user, token] = useAuth();
  
    function handleSubmit(event) {
      event.preventDefault();
      let newReply = {
        comment_id: props.comment.id,
        text: text,
        user_id: user.id,
      };
      console.log(newReply);
      addNewReply(newReply);
    }
  
    async function addNewReply(newReply) {
      await axios.post(`http://127.0.0.1:8000/api/replies/create/`, newReply, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      props.fetchComments();
      props.getReply(newReply)
    }


    return (
        <form onSubmit={handleSubmit}>
        <div
          style={{
            color: "white",
            backgroundColor: "#764134",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "black",
            margin: "1em",
            borderRadius: ".75em",
            boxShadow: "10px 5px 5px #764134",
          }}
          class="form-group"
        >
          <h5>Post Replies here</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Enter reply"
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    );
}
 
export default ReplyForm;