import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingPage = (props) => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=The Weekend&key=AIzaSyADwfFOa8oCMWoWfKuESBZmEFDTEd8mB18&part=snippet"
    );
    debugger;
    console.log(response.data);
  };

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/XXYlFuWEuKI?autoplay=1&origin=http://example.com"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default LandingPage;
