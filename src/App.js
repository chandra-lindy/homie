import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/pages/Home';

function App() {
  return (

    <Provider store={store}>  
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;