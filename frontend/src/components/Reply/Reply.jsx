import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Reply = (props) => {
  const [replies, setReplies] = useState([]);
  const [user, token] = useAuth();

  useEffect(
    () => {
      fetchReplies();
    },
    [props.comment.id],
    [replies]
  );

  const fetchReplies = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/replies/${props.comment.id}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
    setReplies(response.data);
  };

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#CD9A8E",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "black",
        margin: "1em",
        borderRadius: ".75em",
        boxShadow: "10px 5px 5px #764134",
      }}
    >
      {replies.map((reply) => {
        return (
          <p>
            {user?.username} replies: {reply.text}
          </p>
        );
      })}
    </div>
  );
};

export default Reply;
