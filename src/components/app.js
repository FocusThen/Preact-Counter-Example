import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Counter from '../routes/counter';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Counter path="/counter" name="muco" />
    </Router>
  </div>
);

export default App;
