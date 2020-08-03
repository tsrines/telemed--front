import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Rating, Header, Message, Divider, Segment } from 'semantic-ui-react';

const About = ({
  doctor: {
    name,
    formatted_phone_number,
    formatted_address,
    rating,
    url,
    website,
  },
  rate,
  favorite,
  loading,
  loadUser,
}) => {
  useEffect(() => {
    loadUser();
  },[ loadUser]);

  return (
    <Segment textAlign='center'>
      <Header
        as='a'
        href={website}
        rel='noopener noreferrer'
        target='_blank'
        content={name}
      />

      <Rating
        disabled={loading.toString()}
        loading={loading ? loading : undefined}
        onRate={(e, data) => rate(e, data)}
        icon='heart'
        rating={favorite}
        maxRating={1}
        size='massive'
      />
      <Divider hidden />
      <Message
        content={
          <a rel='noopener noreferrer' href={`tel:${formatted_phone_number}`}>
            {formatted_phone_number}
          </a>
        }
      ></Message>
      <Message>
        <a href={url} rel='noopener noreferrer' target='_blank'>
          {formatted_address}
        </a>
      </Message>

      {rating && (
        <Message>
          <Header as='h3'>Average Rating: </Header>
          {
            <Rating
              disabled
              size='large'
              icon='star'
              maxRating={5}
              rating={rating}
            />
          }
        </Message>
      )}
    </Segment>
  );
};

About.propTypes = {
  doctor: PropTypes.object.isRequired,
  rate: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default About;
