import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';
import axios from 'axios';

const REACT_BACKEND_URL = 'http://localhost:5000/questions';

// GET LEADS
export const getLeads = () => async dispatch => {
  try {
    const { data } = await axios.get(REACT_BACKEND_URL);
    
    dispatch({
      type: GET_LEADS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

// DELETE LEAD
export const deleteLead = (id) => async dispatch => {
  try {
    await axios.delete(`${REACT_BACKEND_URL}/${id}`)
    
    dispatch({
      type: DELETE_LEAD,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};

// ADD LEAD
export const addLead = (lead) => async dispatch => {
  try {
    const response = await axios.post(REACT_BACKEND_URL, lead);
    
    dispatch({
      type: ADD_LEAD,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
