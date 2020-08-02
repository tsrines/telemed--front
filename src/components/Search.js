import React from 'react';
import {
  Form,
  Header,
  Image,
  Button,
  Grid,
  Label,
  Input,
} from 'semantic-ui-react';
import axios from 'axios';

class Search extends React.Component {
  state = {
    address: '',
    query: '',
    distance: '',
    browserLocation: false,
    lat: null,
    lng: null,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    console.log('this.props from search', this.props);
    e.preventDefault();
    this.props.loadingHandler(true);
    const payload = this.state;
    const { lat, lng, query, address } = this.state;
    if (lat === null && lng === null) {
      try {
        let res = await axios.get(
          `http://localhost:3000/geocodes/coords?address=${address}`
        );
        payload.lat = res.data.lat;
        payload.lng = res.data.lng;
        payload.query = query;
        await this.props.googleSearch(payload);
      } catch (err) {
        console.log(err);
      }
    } else {
      payload.query = query;
      await this.props.googleSearch(payload);
    }
    // this.props.loadingHandler(false);
  };

  useCurrentPosition = async (e) => {
    const geo = navigator.geolocation;

    if (!geo) {
      console.log('Geo not supported');
    } else {
      geo.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude.toString(),
          lng: position.coords.longitude.toString(),
          browserLocation: true,
        });
      });
    }
  };

  render() {
    return (
      <div>
        <Grid
          textAlign='center'
          style={{ height: '100vh' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 900 }}>
            <Header as='h2' color='red' textAlign='center'>
              <Image src='../favicon.ico' />
              Telemed
            </Header>
            {/* {this.props.loading && <Segment>Loading...</Segment>} */}

            <Form onSubmit={this.onSubmit}>
              <>
                <Label pointing='below'>Click me to use geolocation</Label>

                <Form.Field>
                  {/* <Label>Current Location?</Label> */}
                  <Form.Checkbox
                    onClick={this.useCurrentPosition}
                  ></Form.Checkbox>
                  <Input
                    fluid
                    name='address'
                    onChange={(e) => this.onChange(e)}
                    type='text'
                    placeholder='Address'
                    value={this.state.address}
                  ></Input>
                </Form.Field>
                <Form.Field>
                  <Label>What kind of doctor do you need to see?</Label>
                  <Input
                    fluid
                    required
                    name='query'
                    onChange={(e) => this.onChange(e)}
                    type='text'
                    placeholder='...foot, heart, etc'
                    value={this.state.query}
                  />
                </Form.Field>
                <Form.Field>
                  <Label>How far are you willing to travel?</Label>
                  <Input
                    fluid
                    // label={'Travel Distance'}
                    required
                    name='distance'
                    onChange={(e) => this.onChange(e)}
                    type='number'
                    placeholder='...in miles'
                    value={this.state.distance}
                  />
                </Form.Field>
                <Button loading={this.props.loading} color='red' type='submit'>
                  Get Doctors
                </Button>
              </>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Search;
