import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads } from '../../actions/leadActions';

export class LeadsList extends Component {

  componentDidMount() {
    this.props.getLeads();
  };

  render() {
    return (
      <div>
        Leads List
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  leads: state.LeadList
});

export default connect(mapStateToProps, { getLeads } )(LeadsList);
