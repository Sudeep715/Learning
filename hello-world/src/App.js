import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import { Welcome } from './components/Welcome'
import WelcomeState from './components/WelcomeState'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greet name={"Sudeep"} /> */}
        <WelcomeState />
        <Counter updateBy = {5}/>
        {/* <Welcome /> */}
      </header>

    </div>
  );
}

export default App;
