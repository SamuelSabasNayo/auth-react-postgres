import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leadActions';

export class LeadList extends Component {
  static propTypes = {
    // leads: PropTypes.object.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getLeads();
  };
  
  render() {
    const allLeads = this.props.leads.allQuestions;
    
    return (
      <>
        <h2 style={{textAlign: 'center'}}>Leads</h2>
        <table>
          <thead>
          <tr>
            <th className='th'>ID</th>
            <th className='th'>Name</th>
            <th className='th'>Email</th>
            <th className='th'>Message</th>
          </tr>
          </thead>
          
          <tbody>
          {allLeads === undefined ?
              <tr>
                <td>Loading...</td>
              </tr> :
            allLeads.map(lead => (
              <tr key={lead.id}>
                  <td className='td' >{lead.id}</td>
                  <td className='td' >{lead.name}</td>
                  <td className='td' >{lead.email}</td>
                  <td className='td' >{lead.message}</td>
                  <button className='updateBtn'>Update</button>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className='deleteBtn'
                  >
                    Delete
                  </button>
              </tr>
            )
            )
          }
          </tbody>
        </table>
      </>
    )
  }
};

const mapStateToProps = (state) => ({
  leads: state.leadList.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead } 
)(LeadList);
