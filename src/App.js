import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Header from './components/layout/Headers';
import Home from '../src/components/Home';
import Login from './components/Login';
// import Signup from '../src/components/auth/Signup';
import { ProtectedRoute } from './helpers/ProtectedRoute';

import './App.css';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
      <div className="App">
        <Header />
        <ProtectedRoute exact path='/' component={Home} />
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route exact path='/signup' component={Signup} /> */}
        <Route exact path='/login' component={Login} />
      </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;