import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoDisplay = (props) => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('')
  let navigate = useNavigate();



  function handleClick(videoId) {
    setVideoId(videoId);
    props.getVideoId(videoId);
    navigate("/videodisplay");
  }


  useEffect(() => {
    fetchVideos();
  }, [videoId]);

  const fetchVideos = async () => {
    console.log(props.searchInput);
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyADwfFOa8oCMWoWfKuESBZmEFDTEd8mB18&part=snippet`
    );
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return (
    <div>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
      <div>
        {videos.map((video) => {
          return (
            <div>
              <li>
                <img
                  onClick={() => handleClick(video.id.videoId)}
                  src={video.snippet?.thumbnails.medium.url}
                  alt="thumbnail"
                ></img>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoDisplay;
