import './App.css';
import {Route} from "react-router-dom";
import MultistepForm from './components/MultistepForm';

function App() {
  return (
    <div className="App">
      <Route path="/" component={MultistepForm} />
    </div>
  );
}

export default App;
