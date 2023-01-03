import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingPage = (props) => {

  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    fetchVideos();
  }, [props.searchInput]);

  useEffect(() => {
    setVideoId();
  }, [videoId]);

  function handleClick(videoId){
    setVideoId(videoId)
    console.log(videoId)
  }
  

  const fetchVideos = async () => {
    debugger;
    console.log(props.searchInput);
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${props.searchInput}&key=AIzaSyADwfFOa8oCMWoWfKuESBZmEFDTEd8mB18&part=snippet`
    );
    console.log(response.data.items)
    setVideos(response.data.items);



  };

  return (
    <div>
      {videos.map((video) => {
        return (
          <div>
          <li>
            <img onClick={()=> handleClick(video.id.videoId)} src={video.snippet.thumbnails.medium.url} alt="image"></img>
          </li>
          </div>
          
        );
      })}
    </div>

    // <div>
    //   <iframe
    //     id="ytplayer"
    //     type="text/html"
    //     width="640"
    //     height="360"
    //     src="https://www.youtube.com/embed/XXYlFuWEuKI?autoplay=1&origin=http://example.com"
    //     frameborder="0"
    //   ></iframe>
    // </div>
  );
};

export default LandingPage;
