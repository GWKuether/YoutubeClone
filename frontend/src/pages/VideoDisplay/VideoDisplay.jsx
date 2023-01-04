import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VideoDisplay.css";
import useAuth from "../../hooks/useAuth";

const VideoDisplay = (props) => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoComments, setVideoComments] = useState([]);
  const [user, token] = useAuth();
  let navigate = useNavigate();

  function handleClick(videoId) {
    setVideoId(videoId);
    props.getVideoId(videoId);
    navigate("/videodisplay");
  }

  useEffect(() => {
    fetchVideos();
    fetchVideoDetails();
    fetchComments();
  }, [videoId]);

  const fetchVideos = async () => {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyDbbfDJ1xa15eAhSLmTCW3L5o9nrpPop24&part=snippet`
    );
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  const fetchVideoDetails = async () => {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${props.videoId}&part=snippet&key=AIzaSyDbbfDJ1xa15eAhSLmTCW3L5o9nrpPop24`
    );
    setVideoTitle(response.data.items[0].snippet?.title);
    setVideoDescription(response.data.items[0].snippet?.description);
  };

  const fetchComments = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${props.videoId}/`
    );
    setVideoComments(response.data);
    console.log(videoComments);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div>
            <iframe
              style={{
                boxShadow: "10px 5px 5px #764134",
                borderRadius: ".75em",
              }}
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
              frameborder="0"
            ></iframe>
            <h1
              style={{
                color: "white",
                fontFamily: "fantasy",
                textShadow: "10px 5px 5px #764134",
              }}
            >
              {videoTitle}
            </h1>
            <h5
              className="overflow-auto description-box"
              style={{
                color: "white",
                backgroundColor: "#000000",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "black",
              }}
            >
              {videoDescription}
            </h5>

            <div>
              <div>
                <CommentForm
                  videoId={props.videoId}
                  fetchComments={fetchComments}
                />
                <div>
                  {videoComments.map((comment) => {
                    return <p>{user.username}{comment.text}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div>
            {videos.map((video) => {
              return (
                <div style={{ padding: ".5em" }}>
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
                    alt="thumbnail"
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
