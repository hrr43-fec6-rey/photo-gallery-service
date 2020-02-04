/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../public/styles.css';

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
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          tabIndex="0"
          onClick={handleClick.bind(this, index)}
          onKeyPress={handleClick.bind(this, index)}
          title="Restaurant, City, State"
          className={`img ${classList[index]}`}
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
    <div className="pictures">
      <div className="flex-container">
        {photoList}
        <button
          type="button"
          className="gallery-more"
          onClick={handleClick.bind(this, 8)}
        >
            +
          {photos.length - 9}
          {' '}
            more
        </button>
        <div className={`show-picture${showPicture ? '' : ' hide-picture'}`}>
          <div
            id="left-arrow"
            className={selectedPicture === 0 ? 'disabled' : ''}
            onClick={prevPhoto}
            onKeyDown={prevPhoto}
            role="button"
            tabIndex="0"
          >
            &gt;
          </div>
          <div>
            <img className="img4" src={photos[selectedPicture].image} alt="hello" />
            <div className="footer">
              <div className="circle-image">
                <svg height="50" width="50">
                  <circle cx="25" cy="25" fill="#56D7D9" r="25" />
                  <text dy="10%" fill="white" fontFamily="Arial" fontSize="15px" textAnchor="middle" x="50%" y="50%">OT</text>
                </svg>
              </div>
              <div className="diner-text">
                <div>
                  <strong>
                    OpenTable Diner
                  </strong>
                </div>
                <div className="dined-on">
                  Dined on
                  {' '}
                  {photos[selectedPicture].date}
                </div>
              </div>
            </div>
          </div>
          <div
            id="right-arrow"
            role="button"
            tabIndex="0"
            className={selectedPicture === photos.length - 1 ? 'disabled' : ''}
            onClick={nextPhoto}
            onKeyUp={nextPhoto}
          >
            &gt;
          </div>
          <div
            id="close-picture"
            onClick={closePhoto}
            onKeyPress={closePhoto}
            role="button"
            tabIndex="-1"
          >
            x
          </div>
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
