/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Photos({ photos }) {
  const [selectedPicture, setSelectedPicture] = useState(0);
  const [showPicture, setShowPicture] = useState(false);

  const classList = ['img1', 'img1', 'img2', 'img3', 'img3', 'img3', 'img3', 'img3', 'img3'];

  const handleClick = (index) => {
    setSelectedPicture(index);
    setShowPicture(true);
  };

  const closePhoto = () => {
    setShowPicture(false);
  };

  const nextPhoto = () => {
    setSelectedPicture(selectedPicture + 1);
  };

  const prevPhoto = () => {
    setSelectedPicture(selectedPicture - 1);
  };

  const photoList = photos.map((photo, index) => {
    if (index < 9) {
      return (
        <img
          onClick={handleClick.bind(this, index)}
          title="Restaurant, City, State"
          className={'img ' + classList[index]}
          key={photo.id}
          src={photo.image}
          alt="Smiley face"
        />
      );
    }
    return null;
  });

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="flex-container">
      {photoList}
      <div className={'show-picture' + (showPicture ? '' : ' hide-picture')}>
        <div
          id="left-arrow" className={selectedPicture === 0 ? 'disabled' :''}
          onClick={prevPhoto}
        >
          >
        </div>
        <img className="img4" src={photos[selectedPicture].image} alt="hello" />
        <div class="footer">
          <div class="circle-image">
            <svg height="50" width="50">
              <circle cx="25" cy="25" fill="#56D7D9" r="25" />
              <text dy="10%" fill="white" font-family="Arial" font-size="15px" text-anchor="middle" x="50%" y="50%">OT</text>
            </svg>
          </div>
          <div class="diner-text">
            <div>
              <strong>
              OpenTable Diner
              </strong>
            </div>
            <div class="dined-on">
              Dined on January 31, 2020
            </div>
          </div>
        </div>
        <div
          id="right-arrow"
          className={selectedPicture === 17 ? 'disabled' :''}
          onClick={nextPhoto}
        >
          >
        </div>
        <div
          id="close-picture"
          onClick={closePhoto}
        >
          X
        </div>
      </div>
    </div>
  );
}

Photos.defaultProps = {
  photos: [],
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};

export default Photos;
