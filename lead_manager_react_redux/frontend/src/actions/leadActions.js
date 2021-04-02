import { GET_LEADS } from './types';
import { leads } from '../utils/leadsData';

export const getLeads = () => dispatch => {
  const response = leads;

  try {
    dispatch({
      type: GET_LEADS,
      payload: response
    });
  } catch (error) {
    console.log(error);
  }
};
