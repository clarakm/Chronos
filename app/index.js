import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import SetupContext from './context/SetupContext.js';
import './index.css';
import AddService from './components/AddService.jsx';
import ServiceDashboard from './components/ServicesDashboard.jsx';
import Splash from './components/Splash.jsx';

const App = () => {
  const chronosSetup = useContext(SetupContext);
  // useState hook to conditionally render the splash page only once per session
  const [splash, toggleSplash] = useState(chronosSetup.splash);

  if (splash) return <Splash toggleSplash={toggleSplash} />;
  return chronosSetup.setupRequired ? <AddService /> : <ServiceDashboard />;
};

ReactDOM.render(<App />, document.getElementById('app'));
