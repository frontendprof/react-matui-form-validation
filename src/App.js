import './App.css';
import {Route} from "react-router-dom";
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <div className="App">
      <h2>Salaam</h2>
      <Route path="/" component={MultiStepForm} />
    </div>
  );
}

export default App;
