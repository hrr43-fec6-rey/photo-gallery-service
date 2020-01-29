import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Photo() {
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    axios.get(`/api/photos/${id}`)
      .then((response) => {
        setPhoto(response.data);
      })
      .then(() => {
        console.log('success!!', photos);
      })
      .catch((error) => {
        console.log('error in axios get', error);
      });
  }, []);

  return (
    <div>
      <h1>Photo Gallery</h1>
      <ul>
        <img src="https://picsum.photos/id/237/200" alt="Smiley face" />
      </ul>
    </div>
  );
}

export default Photo;
