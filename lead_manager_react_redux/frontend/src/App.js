import React, { Component } from 'react';
import Header from './components/layout/Header';
import LeadsDashboard from './components/leads/LeadsDashboard';

class App extends Component {
  render() {
    return (
    <div style={{margin: 0, padding: 0}}>
      <Header />
      <LeadsDashboard />
    </div>
    )
  }
}

export default App;

