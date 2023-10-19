import './App.css';
import { Planner } from './Planner';
import image from './planner.png';

function App() {
  return (
    <div className="App">
      <div className='photo'>
        <h1>Weekly Planner</h1>
        <p>Love this timer</p>
      <img src= {image} width="250px" alt="planner"/>
      <Planner/>
      </div>

    </div>
  );
}

export default App;
