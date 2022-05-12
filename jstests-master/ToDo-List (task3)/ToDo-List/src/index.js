import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Users from './Components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/Users" component={Users}/>
    </div>
  </Router>, document.getElementById('root'));

