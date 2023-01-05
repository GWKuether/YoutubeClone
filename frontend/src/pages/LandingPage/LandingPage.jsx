import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = (props) => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    fetchVideos();
  }, [props.searchInput]);

  function handleClick(videoId) {
    setVideoId(videoId);
    props.getVideoId(videoId);
    navigate("/videodisplay");
  }

  const fetchVideos = async () => {
    console.log(props.searchInput);
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${props.searchInput}&key=AIzaSyADwfFOa8oCMWoWfKuESBZmEFDTEd8mB18&part=snippet&maxResults=15`
    );
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return (
    <div className="landing-page">
      {videos.map((video) => {
        return (
          <div style={{padding: ".5rem"}}>
            <img
              style={{
                borderRadius: ".75em",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "black",
                boxShadow: "10px 5px 5px #764134",
              }}
              onClick={() => handleClick(video.id.videoId)}
              src={video.snippet?.thumbnails.medium.url}
              alt="image"
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
