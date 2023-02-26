import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const ShowVideo = () => {
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://63fb09552027a45d8d5f07a6.mockapi.io/videoupload")
      .then((response) => {
        setApiData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  getData();
  return (
    <div>
      <h2>Display Video</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Video List</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>
                    {" "}
                    <video width="400" height="300" controls>
                      <source src={item.videos} type="video/mp4" />
                    </video>
                  </td>
                </tr>
                ;
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowVideo;
