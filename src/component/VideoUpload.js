import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../component/style.css";
import { useNavigate } from "react-router-dom";
const VideoUpload = () => {
  const [videos, setVideos] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://63fb09552027a45d8d5f07a6.mockapi.io/videoupload", {
        videos: videos,
      })
      .then(() => {
        navigate("/displayVideo");
      });
  };

  return (
    <div>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
              <b>Upload Video</b>
            </Form.Label>
            <Form.Control
              type="file"
              accept=".mp4"
              className="videoupload"
              onChange={(e) => setVideos(e.target.value)}
            />
          </Form.Group>

          <br></br>
          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Form>
        {videos}
      </div>
    </div>
  );
};

export default VideoUpload;
