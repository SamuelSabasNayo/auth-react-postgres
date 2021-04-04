import React, { Component } from 'react';
import './App.css';

import { Provider as AlertProvider, positions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './components/layout/Header';
import LeadsDashboard from './components/leads/LeadsDashboard';
import { Alerts } from './components/layout/Alerts';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
};

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div className='App' style={{margin: 0, padding: 0, width: '100%'}}>
          <Header />
          <Alerts />
          <LeadsDashboard />
        </div>
      </AlertProvider>
    )
  }
}

export default App;

