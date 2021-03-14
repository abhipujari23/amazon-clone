import './App.css';
import Header from './Header.js';
import Home from './Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Amazon Clone</title>
      </Helmet>
      <Header/>
      <Home />
     </div>
  );
}

export default App;
