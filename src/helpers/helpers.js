import axios from 'axios';
import { API_ROOT } from '../constants';

export const fetchApiDoctors = async (payload) => {
  try {
    let res = await axios.post(`${API_ROOT}/doctors`, payload);
    return res.data;
  } catch (err) {
    console.log('This is your error:', err);
    throw err;
  }
};

export const createReviews = async (place_id, doctor_id) => {
  const reviewPayload = {
    place_id,
    doctor_id,
  };

  try {
    let res = await axios.post(`${API_ROOT}/reviews`, reviewPayload);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createPhotos = async (doctor_reference, doctor_id) => {
  const photoHash = {
    doctor_id,
    doctor_reference,
  };

  try {
    let res = await axios.post(`${API_ROOT}/photos`, photoHash);
    return res.data;
  } catch (err) {
    throw err;
  }
};
