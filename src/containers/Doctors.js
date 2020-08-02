import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import DoctorCard from '../components/DoctorCard';

class Doctors extends React.Component {
  displayDoctors = () => {
    if (this.props.doctors) {
      return this.props.doctors.map((doctor) => (
        <DoctorCard
          currentUser={this.props.currentUser}
          getDoctorById={this.props.getDoctorById}
          key={doctor.id}
          doctor={doctor}
          loading={this.props.loading}
        />
      ));
    }
  };

  displayLoading = () => {
    return <h1>Loading...</h1>;
  };

  async componentDidMount() {
    await this.props.getDoctors();
  }

  render() {
    console.log('this.props from doctorsjs', this.props);
    return (
      <div>
        <Grid
          container
          textAlign='center'
          style={{ height: '100vh' }}
          verticalAlign='middle'
        >
          <br></br>
          <Card.Group
            style={{ maxHeight: '35em' }}
            display='flex'
            justify-content='center'
            itemsPerRow={3}
          >
            {this.displayDoctors()}
          </Card.Group>
        </Grid>
      </div>
    );
  }
}

export default Doctors;
