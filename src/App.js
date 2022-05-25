/* import logo from './logo.svg'; */
import './css/App.css';


import Home from './Components/Home';
import Form from './Components/Form.jsx';
import Api from './Components/Api';
import Plan from './Components/Plan';
import User from './Components/User';

function App() {
  return (
    <div className="App">
    <Home/>
    <Form/>
    <Api/>
    <Plan/>
    <User/>
    </div>
  );
}

export default App;
