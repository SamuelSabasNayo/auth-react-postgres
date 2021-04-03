import React, { Component } from 'react';
import Header from './components/layout/Header';
import LeadsDashboard from './components/leads/LeadsDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className='App' style={{margin: 0, padding: 0, width: '100%'}}>
      <Header />
      <LeadsDashboard />
    </div>
    )
  }
}

export default App;

