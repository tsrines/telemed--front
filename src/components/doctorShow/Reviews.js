import React from 'react';
import PropTypes from 'prop-types';
import {
  Message,
  Container,
  Header,
  Rating,
  Image,
  Grid,
} from 'semantic-ui-react';

const Reviews = ({ reviews }) => {
  return (
    <Grid.Row>
      {reviews &&
        reviews.map(
          ({ author_name, author_url, profile_photo_url, text, rating }) => (
            <Message key={author_name}>
              <Container>
                <Header>
                  <Image size='massive' src={profile_photo_url} />

                  <div>
                    <a
                      href={author_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <>{author_name}</>
                    </a>
                  </div>
                </Header>

                <Rating disabled icon='star' maxRating={5} rating={rating} />
              </Container>

              <Message.Content>{text}</Message.Content>
            </Message>
          )
        )}
    </Grid.Row>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
