import axios from 'axios';

export const createDoctors = async (doctors) => {
  const docArray = [];
  doctors.forEach(async (doctor) => {
    let detailedDoctor;
    try {
      let res = await axios.get(
        `http://localhost:3000/geocodes/details/${doctor.place_id}`
      );
      detailedDoctor = res.data.result;
    } catch (err) {
      console.log('Error', err);
    }

    const {
      formatted_address,
      formatted_phone_number,
      name,
      place_id,
      rating,
      url,
      website,
      user_ratings_total,
      geometry: {
        location: { lat, lng },
      },
    } = detailedDoctor;

    const doctorHash = {
      place_id,
      name,
      formatted_address,
      rating,
      user_ratings_total,
      formatted_phone_number,
      lat,
      lng,
      url,
      website,
    };
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'Application/json');
    myHeaders.append('accepts', 'application/json');

    const postDoctorsOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(doctorHash),
      redirect: 'follow',
    };
    let data;
    try {
      let res = await fetch(
        'http://localhost:3000/doctors',
        postDoctorsOptions
      );

      data = await res.json();
    } catch (err) {
      console.log(err);
    }
    docArray.push(data);
  });

  return docArray;
};
