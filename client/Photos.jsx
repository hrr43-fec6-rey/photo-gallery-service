import React from 'react';
import PropTypes from 'prop-types';

function Photos({ photos }) {
  const photoList = photos.map((photo) => {
    return <img key={photo.id} src={photo.image} alt="Smiley face" />;
  });
  return (<div>{photoList}</div>
  );
}

Photos.defaultProps = {
  photos: [],
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};

export default Photos;
