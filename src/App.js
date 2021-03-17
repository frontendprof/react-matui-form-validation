import './App.css';
import {Route} from "react-router-dom";
import MultistepForm from './components/MultistepForm';

function App() {
  return (
    <div className="App">
      <h2>Salaam</h2>
      <Route path="/" component={MultiStepForm} />
    </div>
  );
}

export default App;
