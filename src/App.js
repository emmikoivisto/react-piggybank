import './App.css';
import PiggyBank from './PiggyBank'


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <PiggyBank title="Piggy Bank" amount={30}/>  
      {/* title is the prop that is defined in App. */}
      {/* defining them here we don't have to hard code
      so we could have two piggybanks next to each other and define what 
      amounts are deposited. */}
    </div>
  );
}

export default App;
