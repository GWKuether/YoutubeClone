import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReplyForm from "../ReplyForm/ReplyForm";
import Reply from "../Reply/Reply";

const CommentList = (props) => {

  const [user, token] = useAuth();
  const [reply, setReply] = useState('')

function getReply(newReply){
    setReply(newReply)  
}



  return (
    <div>
      {props.videoComments.slice(0).reverse().map((comment) => {
        return (
          <div
            style={{
              color: "white",
              backgroundColor: "#2a1a1f",
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: "black",
              margin: "1em",
              borderRadius: ".75em",
              boxShadow: "10px 5px 5px #764134"
            }}
          >
            <h4>{user?.username} says:</h4>
            <p>{comment.text}</p>
            <Reply comment={comment} />
            <div>

            </div>
            < ReplyForm getReply={getReply} fetchComments={props.fetchComments} comment={comment} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
