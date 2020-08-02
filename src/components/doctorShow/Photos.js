import React from 'react';
import PropTypes from 'prop-types';
import { Image, Grid } from 'semantic-ui-react';

const Photos = ({ photos }) => {
  return (
    <Grid.Row>
      <Image.Group size='medium'>
        {photos &&
          photos.map((photo) => (
            <Image key={photo.id} alt='' src={photo.slug} />
          ))}
      </Image.Group>
    </Grid.Row>
  );
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Photos;
