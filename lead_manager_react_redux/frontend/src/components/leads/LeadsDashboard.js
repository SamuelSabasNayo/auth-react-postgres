import React from 'react';
import LeadsForm from './LeadsForm';
import LeadsList from './LeadsList';

const LeadsDashboard = () => {
  return (
    <div style={{margin: 20}}>
      <LeadsForm />
      <LeadsList />
    </div>
  )
}

export default LeadsDashboard;
