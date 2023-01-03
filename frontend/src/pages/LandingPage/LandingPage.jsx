import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      `https://www.googleapis.com/youtube/v3/search?q=${props.searchInput}&key=AIzaSyCj0jkigA6bd_z2EeL86ilb_DhtFvn_CQ4&part=snippet`
    );
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return (
    <div>
      {videos.map((video) => {
        return (
          <div>
            <li>
              <img
                onClick={() => handleClick(video.id.videoId)}
                src={video.snippet?.thumbnails.medium.url}
                alt="image"
              ></img>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
