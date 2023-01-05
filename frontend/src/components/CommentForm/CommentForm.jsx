import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {
  const [videoId, setVideoId] = useState("");
  const [text, setText] = useState("");
  const [likes, setLikes] = useState("0");
  const [dislikes, setDislikes] = useState("0");
  const [user, token] = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    setVideoId(props.videoId);
    let newComment = {
      video_id: props.videoId,
      text: text,
      likes: likes,
      dislikes: dislikes,
      user_id: user.id,
    };
    console.log(newComment);
    addNewComment(newComment);
  }

  async function addNewComment(newComment) {
    await axios.post("http://127.0.0.1:8000/api/comments/", newComment, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    props.fetchComments();
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
        <h5>Post comments here</h5>
        <input
          type="text"
          class="form-control"
          placeholder="Enter comment"
          onChange={(event) => setText(event.target.value)}
        />
        <small class="form-text text-muted">
          The whole Internet can see what you're about to type
        </small>
      </div>
      <button type="submit" class="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
