import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingPage = (props) => {
  const [videos,setVideos]=useState([])
  useEffect(() => {
    fetchVideos();
  }, [props.searchInput]);

  const fetchVideos = async () => {
    debugger;
    console.log(props.searchInput);
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${props.searchInput}&key=AIzaSyADwfFOa8oCMWoWfKuESBZmEFDTEd8mB18&part=snippet`
    );
    setVideos(response.data.items)

    {videos.map((video) => {
      return(
        video.snippet.thumbnails.default.url
      )

    })
    // let resultOne = response.data.items[0].snippet.thumbnails.default.url;
    // let resultTwo = response.data.items[1].snippet.thumbnails.default.url;
    // let resultThree = response.data.items[2].snippet.thumbnails.default.url;
    // let resultFour = response.data.items[3].snippet.thumbnails.default.url;
    // let resultFive = response.data.items[4].snippet.thumbnails.default.url;
  };

  return (


    <img src = {resultOne} alt='image'></img>

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
