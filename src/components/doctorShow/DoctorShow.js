import React from 'react';
import { Divider, Image, Container } from 'semantic-ui-react';
import axios from 'axios';

import ShowMenu from './ShowMenu';

class DoctorShow extends React.Component {
  state = {
    favorite: 0,
  };

  isFavorite = () => {
    const favorite = this.props.currentUser.doctors.find(
      (doc) => doc.id === parseInt(this.props.match.params.id)
    );

    if (favorite) this.setState({ favorite: 1 });
    else this.setState({ favorite: 0 });
  };

  async componentDidMount() {
    this.props.loadingHandler(true);

    await this.props.getDoctorById(parseInt(this.props.match.params.id));
    await this.props.loadUser();
    this.isFavorite();
    this.props.loadingHandler(false);
  }

  postFavorite = async () => {
    this.props.loadingHandler(true);

    const favoriteObject = {
      doctor_id: this.props.match.params.id,
      user_id: this.props.currentUser.id,
    };
    try {
      let res = await axios.post(
        `http://localhost:3000/favorites`,
        favoriteObject
      );
      this.setState({ favorite: 1, id: res.data.id }, () => {
        this.props.loadUser();
      });
    } catch (error) {}
    this.props.loadingHandler(false);
  };

  deleteFavorite = async () => {
    this.props.loadingHandler(true);

    let favorite = this.props.currentUser.favorites.find(
      (favorite) => favorite.doctor_id === parseInt(this.props.match.params.id)
    );
    if (favorite === -1) {
      this.setState({ favorite: 0 });
    }
    try {
      let res = await axios.delete(
        `http://localhost:3000/favorites/${favorite.id}`
      );
      console.log('res.data from deletefavorite', res.data);
      this.setState({ favorite: 0 }, () => {
        this.props.loadUser();
      });
    } catch (err) {
      console.log('error', err);
    }
    this.props.loadingHandler(false);
    console.log('got here in delete');
  };

  rate = (e, { rating }) => {
    if (rating === 0) {
      this.deleteFavorite();
    } else {
      this.postFavorite();
    }
  };

  render() {
    console.log('DOCTOR SHOW THIS.STATE: ', this.props);
    // debugger
    const { reviews, photos, photo } = this.props.doctorShow;

    return (
      <Container style={{ padding: '3em' }}>
        <Image centered size='large' src={photo && photo} />
        {/* <About  /> */}
        <Divider hidden />

        <ShowMenu
          loadUser={this.props.loadUser}
          loadingHandler={this.props.loadingHandler}
          loading={this.props.loading}
          favorite={this.state.favorite}
          rate={this.rate}
          doctor={this.props.doctorShow}
          reviews={reviews}
          photos={photos}
        />
      </Container>
    );
  }
}

export default DoctorShow;
