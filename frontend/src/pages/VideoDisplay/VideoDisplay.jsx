import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoDisplay = (props) => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [videoComments, setVideoComments] = useState('')
  let navigate = useNavigate();



  function handleClick(videoId) {
    setVideoId(videoId);
    props.getVideoId(videoId);
    navigate("/videodisplay");
  }


  useEffect(() => {
    fetchVideos();
  }, [videoId]);

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  useEffect(() => {
    fetchComments();
  }, [videoId] );

  const fetchVideos = async () => {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCj0jkigA6bd_z2EeL86ilb_DhtFvn_CQ4&part=snippet`
    );
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  
  const fetchVideoDetails = async () => {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${props.videoId}&part=snippet&key=AIzaSyCj0jkigA6bd_z2EeL86ilb_DhtFvn_CQ4`
    );
    setVideoTitle(response.data.items[0].snippet?.title)
    setVideoDescription(response.data.items[0].snippet?.description) 
  };


  const fetchComments = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${props.videoId}/`
    );
    setVideoComments(response.data[0]?.text)
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
        <h1>{videoTitle}</h1>
        <h5>{videoDescription}</h5>
        <h2>{videoComments}</h2>
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
      <div style={{'margin-left': '2em', 'margin-bottom': '2em'}}>
        <CommentForm videoId={props.videoId} fetchComments={fetchComments}/>
      </div>

    </div>
  );
};

export default VideoDisplay;
