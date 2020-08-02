import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import defaultphoto from '../../src/defaultphoto.png';

const DoctorCard = (props) => {
  const { id, name, formatted_address, rating, photo } = props.doctor;

  return (
    <Card inverted onClick={(e) => props.history.push(`/doctors/${id}`)}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      {photo && <Image fluid alt='Practice Image' src={photo} />}
      {!photo && (
        <Image fluid centered alt='Practice Image' src={defaultphoto} />
      )}
      <Card.Content>
        {formatted_address}
        {rating && (
          <Card.Meta>
            <Rating disabled rating={rating} maxRating={5} icon='star' />
          </Card.Meta>
        )}
      </Card.Content>
    </Card>
  );
};

export default withRouter(DoctorCard);
