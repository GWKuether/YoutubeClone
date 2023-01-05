import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const CommentList = (props) => {
  const [user, token] = useAuth();

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
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
