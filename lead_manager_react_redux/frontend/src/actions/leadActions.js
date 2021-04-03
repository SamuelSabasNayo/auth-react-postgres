import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';
import axios from 'axios';

// GET LEADS
export const getLeads = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:5000/questions');
    
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
    await axios.delete(`http://localhost:5000/questions/${id}`)
    
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
    const response = await axios.post('http://localhost:5000/questions', lead);
    
    dispatch({
      type: ADD_LEAD,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
